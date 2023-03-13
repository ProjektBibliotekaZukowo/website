import { Heading } from '@chakra-ui/react';
import { FetchArticleQuery } from 'generated/types';
import { getArticle, getArticlesSlugs } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Article({ article }: FetchArticleQuery) {
  const post = article['items'][0];
  return <Heading as="h1">{post.title}</Heading>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await getArticle({
      preview: params ? params.preview != undefined : false,
      slug: params.article as string,
    });
    return {
      props: { ...data },
    };
  } catch (e) {
    console.log(e.networkError.result.errors);
    throw e;
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  let slugs: Array<{ params: { article: string } }> = [];
  let nextSkip = 0;
  const { data } = await getArticlesSlugs({ skip: 0 });
  const { total, items, skip, limit } = data.slugs;
  slugs = slugs.concat(items.map((i) => ({ params: { article: i.slug } })));
  nextSkip = skip + limit;
  while (nextSkip < total) {
    const {
      data: {
        slugs: { items, skip, limit },
      },
    } = await getArticlesSlugs({ skip: nextSkip });
    if (typeof skip === 'undefined') {
      break;
    }
    nextSkip = skip + limit;
    slugs = slugs.concat(items.map((i) => ({ params: { article: i.slug } })));
  }

  return {
    paths: slugs,
    fallback: false,
  };
};
