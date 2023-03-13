import { Heading } from '@chakra-ui/react';
import { getArticlesPage } from 'lib/api';

export default async function ArticlePage() {
  return <Heading as="h1">Article Page</Heading>;
}

export async function getStaticPaths({ params }) {
  const { data } = await getArticlesPage({
    preview: params ? params.preview != undefined : false,
  });

  if (data.articles.items.length) {
    return {
      paths: data.articles.items.map((article) => {
        return { params: { article: article.slug } };
      }),
      fallback: false,
    };
  }
  return {
    paths: [],
    fallback: false, // can also be true or 'blocking'
  };
}
