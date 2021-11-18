import { getClient } from './contentfulApi';
import { FetchAssetQuery, FetchAssetQueryVariables, FetchHomeQuery } from 'generated/types';
import { ASSET_QUERY, HOME_QUERY } from 'graphql/queries';

type PreviewParams = {
  preview?: boolean;
};

type GetPageParams = {
  slug: string;
  pageContentType: string;
} & PreviewParams;

type AssetParams = {
  id: string;
} & PreviewParams;

export async function logoFetcher(id: string) {
  const client = getClient({ preview: false });
  return await client.query<FetchAssetQuery, FetchAssetQueryVariables>({
    query: ASSET_QUERY,
    variables: {
      asset_id: id,
    },
  });
}

export async function getHomePage(params: PreviewParams) {
  const client = getClient(params);
  return await client.query<FetchHomeQuery>({
    query: HOME_QUERY,
  });
}
