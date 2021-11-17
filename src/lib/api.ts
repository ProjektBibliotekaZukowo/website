import { Asset, createClient } from 'contentful';

import { parsePage } from './pageParsers';
import { PageContentType } from './constants';

const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

const getClient = (preview: boolean) => (preview ? previewClient : client);

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

export async function logoFetcher(id: string): Promise<Asset> {
  return await getClient(false).getAsset(id);
}

// FIXME: this should accept some parameters that's why it's function
const getPageQuery = () => ({
  limit: 1,
  include: 10,
  content_type: 'branch',
  order: 'sys.createdAt',
});

export async function getPage(params: GetPageParams) {
  const query = getPageQuery();
  const {
    items: [page],
  } = await getClient(params.preview).getEntries(query);

  return page ? parsePage(page) : null;
}

type GetPagesOfTypeParams = {
  pageContentType: string;
  preview?: boolean;
};

export async function getPagesOfType(params: GetPagesOfTypeParams) {
  const { pageContentType, preview } = params;
  const client = getClient(preview);

  const { items: pages } = await client.getEntries({
    limit: 100,
    content_type: PageContentType,
    'fields.content.sys.contentType.sys.id': pageContentType,
  });

  return pages ? pages.map((page) => parsePage(page)) : [];
}
