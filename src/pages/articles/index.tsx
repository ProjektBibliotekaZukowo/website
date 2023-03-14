import { GetStaticProps } from 'next';
import React from 'react';
import { Link, List, ListItem, Box } from '@chakra-ui/react';
import { FetchArticlesQuery } from 'generated/types';
import { getArticlesPage } from 'lib/api';
import NextLink from 'next/link';
import { ArticleBreadcrumb } from 'components/ArticleBreadcrumb';

type PaginationInfo = {
  currentPage: number;
};

const navItems = [
  {
    alt: 'Strona Domowa',
    href: '/',
    title: 'Strona Domowa',
    isCurrentPage: false,
    isTruncated: false,
  },
  {
    alt: 'Artykuły',
    href: '/articles',
    title: 'Artykuły',
    isCurrentPage: true,
    isTruncated: true,
  },
];

export default function ArticlesList({
  articles,
  currentPage,
}: FetchArticlesQuery & PaginationInfo) {
  return (
    <Box maxWidth={'container.xl'} margin="auto" px="20px">
      <Box my={3}>
        <ArticleBreadcrumb
          navItems={[
            {
              alt: 'Strona Domowa',
              href: '/',
              title: 'Strona Domowa',
              isCurrentPage: false,
              isTruncated: false,
            },

            {
              alt: 'Artykuły',
              href: '/articles',
              title: 'Artykuły',
              isCurrentPage: true,
              isTruncated: true,
            },
          ]}
        />
      </Box>
      <List>
        {articles.items.map((article) => {
          return (
            <ListItem key={article.sys.id}>
              <Link as={NextLink} href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
      Current Page: {currentPage}
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await getArticlesPage({
    preview: params ? params.preview != undefined : false,
  });

  return {
    props: { ...data, currentPage: 0 },
  };
};
