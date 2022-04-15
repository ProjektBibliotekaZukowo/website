import { getClient } from './contentfulApi';
import {
  FetchAssetQuery,
  FetchAssetQueryVariables,
  FetchHomeQuery,
  FetchHomeQueryVariables,
} from 'generated/types';
import { ASSET_QUERY, HOME_QUERY } from 'graphql/queries';
import {
  ASSETS,
  HOME_PAGE_ARTICLE_LIMIT,
  HOME_PAGE_NEWS_LIMIT,
  LATEST_ARTICLES_TAG_ID,
} from './constants';

type PreviewParams = {
  preview?: boolean;
};

type GetHomePageParams = PreviewParams;

export async function logoFetcher(id: string) {
  const client = getClient({ preview: false });
  return await client.query<FetchAssetQuery, FetchAssetQueryVariables>({
    query: ASSET_QUERY,
    variables: {
      assetId: id,
    },
  });
}

export async function getHomePage(params: GetHomePageParams) {
  const client = getClient(params);
  return await client.query<FetchHomeQuery, FetchHomeQueryVariables>({
    query: HOME_QUERY,
    variables: {
      heroImageId: ASSETS.heroImageId,
      articlesLimit: HOME_PAGE_ARTICLE_LIMIT,
      newsLimit: HOME_PAGE_NEWS_LIMIT,
      latestArticlesTagName: LATEST_ARTICLES_TAG_ID,
    },
  });
}
