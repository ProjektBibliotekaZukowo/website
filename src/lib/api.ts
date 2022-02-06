import { getClient } from './contentfulApi';
import {
  FetchAssetQuery,
  FetchAssetQueryVariables,
  FetchHomeQuery,
  FetchHomeQueryVariables,
} from 'generated/types';
import { ASSET_QUERY, HOME_QUERY } from 'graphql/queries';

type PreviewParams = {
  preview?: boolean;
};

type GetHomePageParams = {
  heroImageId: string;
  articlesLimit: number;
} & PreviewParams;

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
      heroImageId: params.heroImageId,
      articlesLimit: 3,
    },
  });
}
