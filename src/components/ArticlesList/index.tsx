import { FetchArticlesQuery } from 'generated/types';
import { Link, List, ListItem, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ArticleBreadcrumb } from 'components/ArticleBreadcrumb';
import { ARTICLE_PAGINATION_PAGE_SIZE } from 'lib/constants';
import { ceil } from 'lodash';

export type PaginationInfo = {
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
  const pagesCollection: number[] = [];
  const totalPages = ceil(articles.total / ARTICLE_PAGINATION_PAGE_SIZE);
  for (let i = 0; i < totalPages; i++) {
    pagesCollection.push(i + 1);
  }
  return (
    <Box maxWidth={'container.xl'} margin="auto" px="20px">
      <Box my={3}>
        <ArticleBreadcrumb navItems={navItems} />
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
      <List>
        {pagesCollection.map((page) => {
          const link =
            page === 1 ? (
              <Link as={NextLink} href={`/articles`}>
                {page}
              </Link>
            ) : (
              <Link as={NextLink} href={`/articles/strona/${page}`}>
                {page}
              </Link>
            );
          return <ListItem key={page}>{link}</ListItem>;
        })}
      </List>
    </Box>
  );
}
