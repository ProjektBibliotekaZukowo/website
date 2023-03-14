import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { ArticleBreadcrumb } from 'components/ArticleBreadcrumb';
import RichTextResponse from 'components/RichTextResponse';
import { FetchArticleQuery } from 'generated/types';
import { getArticle, getArticlesSlugs } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Article({ article }: FetchArticleQuery) {
  const post = article['items'][0];

  const navItems = [
    {
      alt: 'Strona Domowa',
      href: '/',
      title: 'Strona Domowa',
      isCurrentPage: false,
      isTruncated: false,
    },
    {
      alt: 'Aktualności',
      href: '/aktualnosci',
      title: 'Aktualności',
      isCurrentPage: false,
      isTruncated: false,
    },
    {
      alt: post.title,
      href: `/aktualnosci/${post.slug}`,
      title: post.title,
      isCurrentPage: true,
      isTruncated: true,
    },
  ];
  return (
    <Box maxWidth={'container.xl'} margin="auto" px="20px">
      <Box my={3}>
        <ArticleBreadcrumb navItems={navItems} />
      </Box>
      <Box as="article">
        <Heading as="h1">{post.title}</Heading>
        <VStack mt={5} spacing={5} alignItems="flex-start">
          <RichTextResponse richTextResponse={post.description}></RichTextResponse>
          <RichTextResponse richTextResponse={post.body}></RichTextResponse>
        </VStack>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await getArticle({
    preview: params ? params.preview != undefined : false,
    slug: params.article as string,
  });
  return {
    props: { ...data },
  };
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
