# bibliotekazukowo.pl on WordPress

The library's site runs on WordPress. This folder holds everything that is ours:
the theme, a setup script and the local development environment. Content
(posts, pages, media) lives in WordPress, not in git.

Everything runs in Docker. Nothing needs to be installed on your machine.

```
wordpress/
├── compose.yml                 local environment (WordPress, MariaDB, WP-CLI, screenshots)
├── theme/biblioteka-zukowo/    the block theme: theme.json, templates, parts, patterns
├── setup/setup.php             idempotent site setup (settings, pages, editable blocks)
├── setup/clean-content.php     idempotent cleanup of imported content
├── mu-plugins/bz-smtp.php      sends mail through SMTP_* env (no-op when unset)
├── Dockerfile, docker/         the production image
├── tools/                      screenshots, block validation, accessibility check
└── import/                     WordPress export files (gitignored, contains site content)
```

## Local environment

Requires Docker. The site runs at http://localhost:8088 (login `admin` / `admin`, local only).

```bash
cd wordpress
docker compose up -d                       # start WordPress + database
docker compose run --rm cli wp <command>   # run any WP-CLI command
docker compose down                        # stop (data is kept)
docker compose down -v                     # stop and delete all local data
```

The theme folder is mounted into the container, so edits show up on reload.

### Fresh copy of the live site

1. In the live site's admin: Narzędzia → Eksport → Cała zawartość → Pobierz plik eksportu.
2. Put the file in `wordpress/import/export.xml`.
3. Import it and run the setup (the import downloads all media from the live site and takes about an hour):

```bash
docker compose up -d
docker compose run --rm cli wp core install --url=http://localhost:8088 \
  --title=Biblioteka --admin_user=admin --admin_password=admin \
  --admin_email=admin@example.test --skip-email
docker compose run --rm cli wp post delete 1 2 3 --force   # sample content of a fresh install
docker compose run --rm cli wp language core install pl_PL --activate
docker compose run --rm cli wp plugin install wordpress-importer --activate
docker compose run --rm cli wp import /import/export.xml --authors=skip
docker compose run --rm cli wp theme activate biblioteka-zukowo
docker compose run --rm cli wp eval-file /setup/setup.php
docker compose run --rm cli wp eval-file /setup/clean-content.php
```

`clean-content.php` replaces emoji images hotlinked from Facebook (copied along
with Facebook posts) with real emoji characters and strips stray forms from posts.

## How the theme works

- **Design tokens** (colours, Montserrat, font sizes, spacing, 1280px width) are in
  `theme.json`. Staff can only pick from this palette and these sizes.
- **Templates** (`templates/`) define the home page, news list, article, page,
  search and 404. Header, footer and the "Dziś jesteśmy otwarci" bar are in `parts/`.
- **Content staff change** lives in synced patterns, which Editors can edit under
  **Stałe treści** in the admin menu:
  - *Godziny otwarcia*: one table, shown in every branch and in the "today" bar
  - *Filie (adresy i mapy)*: branch addresses, contacts and maps
  - *Partnerzy*: partner logos
  - *Stopka: dane kontaktowe* and *Stopka: dokumenty i linki*

  Templates include them with `[bz_wzorzec slug="…"]`, so theme files never depend
  on database IDs. `setup/setup.php` creates them once and never overwrites them.
- **"Dziś jesteśmy otwarci"** is filled in by `assets/js/opening-hours.js` in the
  visitor's browser, so cached pages always show the right day. It reads the
  *Godziny otwarcia* table: the first column must be the Polish day name.
- **Fonts** are self-hosted (no requests to Google).
- **No plugins** are needed.

## Checks

```bash
# Blocks the editor would flag as "unexpected or invalid content"
docker compose run --rm browser validate-blocks.mjs /theme

# Automated WCAG 2.2 A/AA check (axe-core) at desktop and 320px widths
docker compose run --rm browser a11y.mjs home=http://localhost:8088/ news=http://localhost:8088/aktualnosci/

# Desktop and mobile screenshots, saved to .context/shots/<folder>/
docker compose run --rm browser screenshot.mjs /shots/<folder> home=http://localhost:8088/
```

## Production image

`Dockerfile` builds the image the cluster runs. Everything except uploads and the
database comes from it: core, the theme, Polish translations, WP-CLI, the
(inactive) importer and `bz-smtp.php`. Setup scripts are in `/opt/bz-setup`.
Every version and download is pinned; bump them in the Dockerfile together with
`compose.yml`.

GitHub Actions builds every push that touches `wordpress/` and pushes
`ghcr.io/projektbibliotekazukowo/wordpress:<git sha>`. To deploy, set `image.tag`
to that SHA in the german-lab repo (`gitops/apps/staging/biblioteka-staging.yaml`);
Argo CD rolls it out. Plugins and core can't be updated from the admin
(`DISALLOW_FILE_MODS`): updates mean rebuilding the image.

Run WP-CLI in the running pod. `wp` runs as `www-data` even from a root shell:

```bash
kubectl -n biblioteka-staging exec deploy/biblioteka-staging -- wp <command>
```

Runtime settings come from the environment: database and salts from a Secret,
`WP_HOME`, `DISABLE_WP_CRON` and the rest through `WORDPRESS_CONFIG_EXTRA`,
`BZ_NOINDEX=1` for the `X-Robots-Tag: noindex, nofollow` header on staging, and
`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM` for mail.
