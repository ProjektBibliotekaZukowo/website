import { Box, Heading, VStack } from '@chakra-ui/react';
import { ArticleBreadcrumb } from 'components/ArticleBreadcrumb';
import RichTextResponse from 'components/RichTextResponse';
import { FetchPageQuery } from 'generated/types';
import { getPage } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

export default function Page({ page }: FetchPageQuery) {
  const pageItem = page['items'][0];

  const navItems = [
    {
      alt: 'Strona Domowa',
      href: '/',
      title: 'Strona Domowa',
      isCurrentPage: false,
      isTruncated: false,
    },
    {
      alt: pageItem.title,
      href: `/${pageItem.slug}`,
      title: pageItem.title,
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
        <Heading as="h1">{pageItem.title}</Heading>
        <VStack mt={5} spacing={5} alignItems="flex-start">
          <RichTextResponse richTextResponse={pageItem.description}></RichTextResponse>
          <RichTextResponse richTextResponse={pageItem.body}></RichTextResponse>
        </VStack>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await getPage({
    preview: params ? params.preview != undefined : false,
    slug: params.pageSlug as string,
  });

  return {
    props: { ...data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pageSlug: 'o-nas' } },
      { params: { pageSlug: 'aktualnosci' } },
      { params: { pageSlug: 'kontakt' } },
    ],
    fallback: false,
  };
};
