// Takes full-page screenshots of the given URLs. Runs inside the Playwright
// container (see wordpress/README.md); `localhost` is mapped to the Docker host
// so the local WordPress at http://localhost:8088 is reachable.
//
// Usage: node screenshot.mjs <outDir> <name>=<url> [<name>=<url> ...]
import { chromium } from 'playwright';

const [outDir, ...targets] = process.argv.slice(2);
const viewports = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };

const browser = await chromium.launch({
  args: ['--host-resolver-rules=MAP localhost host.docker.internal'],
});
for (const target of targets) {
  const [name, url] = target.split(/=(.*)/s);
  for (const [vpName, viewport] of Object.entries(viewports)) {
    const page = await browser.newPage({ viewport, locale: 'pl-PL', timezoneId: 'Europe/Warsaw' });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    // Some layouts scroll inside a fixed-height wrapper, which fullPage misses,
    // so grow the viewport to the tallest scrollable element instead.
    const height = await page.evaluate(() =>
      Math.max(...[...document.querySelectorAll('*')].map((el) => el.scrollHeight)),
    );
    await page.setViewportSize({ width: viewport.width, height: Math.min(height, 12000) });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${outDir}/${name}-${vpName}.png` });
    // Also save the page in screen-sized sections, which are easier to review.
    const tile = vpName === 'desktop' ? 1200 : 1600;
    for (let y = 0, i = 0; y < height; y += tile, i++) {
      const clip = { x: 0, y, width: viewport.width, height: Math.min(tile, height - y) };
      await page.screenshot({ path: `${outDir}/${name}-${vpName}-${i}.png`, clip });
    }
    await page.close();
  }
  console.log('ok', name);
}
await browser.close();
