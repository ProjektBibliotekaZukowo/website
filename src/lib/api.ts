import { getClient } from './contentfulApi';
import {
  FetchArticleQuery,
  FetchArticleQueryVariables,
  FetchArticlesQuery,
  FetchArticlesQueryVariables,
  FetchArticlesSlugsQuery,
  FetchArticlesSlugsQueryVariables,
  FetchArticlesTotalQuery,
  FetchArticlesTotalQueryVariables,
  FetchAssetQuery,
  FetchAssetQueryVariables,
  FetchHomeQuery,
  FetchHomeQueryVariables,
  FetchPageQuery,
  FetchPageQueryVariables,
} from 'generated/types';
import {
  ARTICLES_HOME_QUERY,
  ARTICLES_SLUGS_QUERY,
  ARTICLE_QUERY,
  ASSET_QUERY,
  GET_PAGE,
  HOME_QUERY,
  TOTAL_NUMBER_OF_ARTICLES,
} from 'graphql/queries';
import {
  ASSETS,
  HOME_PAGE_ARTICLE_LIMIT,
  HOME_PAGE_NEWS_LIMIT,
  LATEST_ARTICLES_TAG_ID,
  MAIN_BRANCH_TAG,
} from './constants';

type PreviewParams = {
  preview?: boolean;
};

type GetHomePageParams = PreviewParams;
type GetArticlesPageParams = PreviewParams & { page: number };
type GetArticleParams = { preview?: boolean; slug: string };
type GetArticlesSlugsParams = { skip: number };
type GetPageParams = { preview?: boolean; slug: string };

async function showErrors(cb) {
  try {
    return await cb();
  } catch (e) {
    console.log(e.networkError.result.errors);
    throw e;
  }
}

export async function logoFetcher(id: string) {
  const client = getClient({ preview: false });
  return await showErrors(async () => {
    return await client.query<FetchAssetQuery, FetchAssetQueryVariables>({
      query: ASSET_QUERY,
      variables: {
        assetId: id,
      },
    });
  });
}

export async function getHomePage(params: GetHomePageParams) {
  const client = getClient(params);
  return await showErrors(async () => {
    return await client.query<FetchHomeQuery, FetchHomeQueryVariables>({
      query: HOME_QUERY,
      variables: {
        heroImageId: ASSETS.heroImageId,
        articlesLimit: HOME_PAGE_ARTICLE_LIMIT,
        newsLimit: HOME_PAGE_NEWS_LIMIT,
        latestArticlesTagName: LATEST_ARTICLES_TAG_ID,
        mainBranchTagName: MAIN_BRANCH_TAG,
      },
    });
  });
}

export async function getArticlesPage(params: GetArticlesPageParams) {
  const client = getClient(params);
  return await showErrors(async () => {
    return await client.query<FetchArticlesQuery, FetchArticlesQueryVariables>({
      query: ARTICLES_HOME_QUERY,
      variables: {
        articlesLimit: HOME_PAGE_ARTICLE_LIMIT,
        skip: (params.page - 1) * HOME_PAGE_ARTICLE_LIMIT,
      },
    });
  });
}

export async function getArticle(params: GetArticleParams) {
  const client = getClient(params);
  return await showErrors(async () => {
    return await client.query<FetchArticleQuery, FetchArticleQueryVariables>({
      query: ARTICLE_QUERY,
      variables: {
        slug: params.slug,
      },
    });
  });
}

export async function getArticlesSlugs(params: GetArticlesSlugsParams) {
  const client = getClient({ preview: false });
  return showErrors(async () => {
    return await client.query<FetchArticlesSlugsQuery, FetchArticlesSlugsQueryVariables>({
      query: ARTICLES_SLUGS_QUERY,
      variables: {
        skip: params.skip,
      },
    });
  });
}

export async function getTotalNumberOfArticles() {
  const client = getClient({ preview: false });
  return showErrors(async () => {
    return await client.query<FetchArticlesTotalQuery, FetchArticlesTotalQueryVariables>({
      query: TOTAL_NUMBER_OF_ARTICLES,
    });
  });
}

export async function getPage(params: GetPageParams) {
  const client = getClient(params);
  return showErrors(async () => {
    return await client.query<FetchPageQuery, FetchPageQueryVariables>({
      query: GET_PAGE,
      variables: { slug: params.slug },
    });
  });
}
