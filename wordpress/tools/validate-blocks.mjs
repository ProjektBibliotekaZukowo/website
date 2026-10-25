// Parses theme templates, parts, patterns and the synced patterns in the
// database with the block editor's own parser, and reports blocks the editor
// would flag as invalid ("This block contains unexpected or invalid content").
// Runs inside the screenshot container against the local site.
//
// Usage: node validate-blocks.mjs <theme dir>
import { chromium } from 'playwright';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const themeDir = process.argv[2];
const base = 'http://localhost:8088';

const sources = [];
for (const dir of ['templates', 'parts', 'patterns']) {
  for (const file of readdirSync(join(themeDir, dir))) {
    // Pattern files are PHP; their markup follows the closing PHP tag.
    const raw = readFileSync(join(themeDir, dir, file), 'utf8');
    sources.push({ name: `${dir}/${file}`, content: raw.replace(/^<\?php[\s\S]*?\?>\s*/, '') });
  }
}

const browser = await chromium.launch({
  args: ['--host-resolver-rules=MAP localhost host.docker.internal'],
});
const page = await browser.newPage();
await page.goto(`${base}/wp-login.php`);
await page.fill('#user_login', 'admin');
await page.fill('#user_pass', 'admin');
await page.click('#wp-submit');
await page.waitForURL(/wp-admin/);

// Synced patterns from the database, read through the REST API.
// Fetched from inside the page: it shares the login cookie and the host mapping.
await page.goto(`${base}/wp-admin/post-new.php`);
await page.waitForFunction(() => window.wp?.apiFetch && window.wp?.blocks?.getBlockTypes?.().length > 50, null, {
  timeout: 60000,
});
const synced = await page.evaluate(() =>
  window.wp.apiFetch({ path: '/wp/v2/blocks?per_page=100&context=edit' }),
);
for (const block of synced) {
  sources.push({ name: `synced pattern "${block.slug}"`, content: block.content.raw });
}

const problems = await page.evaluate((sources) => {
  const out = [];
  const walk = (blocks, name) => {
    for (const block of blocks) {
      if (block.isValid === false) {
        const issue = (block.validationIssues || [])
          .map((i) => i.args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' '))
          .join(' | ');
        out.push(`${name}: ${block.name} is invalid. ${issue.slice(0, 600)}`);
      }
      if (block.name === 'core/missing') out.push(`${name}: unknown block ${block.attributes.originalName}`);
      walk(block.innerBlocks, name);
    }
  };
  for (const { name, content } of sources) walk(window.wp.blocks.parse(content), name);
  return out;
}, sources);

console.log(`Checked ${sources.length} sources.`);
console.log(problems.length ? problems.join('\n') : 'All blocks valid.');
await browser.close();
process.exitCode = problems.length ? 1 : 0;
