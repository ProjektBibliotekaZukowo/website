export const SITE_NAME = 'Biblioteka Samorządowa w Żukowie';
export const SITE_SEO_DESCRIPTION = 'opis SEO optymalizujący targetowanie';
export const SITE_NEWS_SECTION_TITLE = 'Najnowsze wiadomości';
export const SITE_NEWS_MORE_NEWS = 'Więcej aktualności';

export const ASSETS = {
  logoId: '56AAvOmbPfhTt9GcpdCxXH',
  heroImageId: '1kpr1kWAfJwZIp3nTm9jlc',
};

export const HOME_PAGE_ARTICLE_LIMIT = 3;

export const MAIN_BRANCH_TAG = 'mainBranch';

export const PageContentType = 'page';

export const routes = {
  MAIN: '/',
  O_NAS: '/o-nas',
  AKTUALNOSCI: '/aktualnosci',
  KATALOG_ONLINE: '/katalog-online',
  KONTAKT: '/kontakt',
};

export const links = [
  { title: 'O nas', href: routes.O_NAS },
  { title: 'Aktualności', href: routes.AKTUALNOSCI },
  { title: 'Kontakt', href: routes.KONTAKT },
];

export const workingWeek = [
  { pl: 'Poniedziałek', en: 'monday' },
  { pl: 'Wtorek', en: 'tuesday' },
  { pl: 'Środa', en: 'wednesday' },
  { pl: 'Czwartek', en: 'thursday' },
  { pl: 'Piątek', en: 'friday' },
];

// TODO: Should be 10 or something
export const ARTICLE_PAGINATION_PAGE_SIZE = 3;
export const LATEST_ARTICLES_TAG_ID = 'homePageArticle';
export const HOME_PAGE_NEWS_LIMIT = 3;
