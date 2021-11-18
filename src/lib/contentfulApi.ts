import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.CF_DELIVERY_ACCESS_TOKEN}`,
  },
});

const previewClient = new ApolloClient({
  uri: `https://preview.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.CF_PREVIEW_ACCESS_TOKEN}`,
  },
});

export const getClient = (params: { preview?: boolean }) =>
  params.preview ? previewClient : client;
