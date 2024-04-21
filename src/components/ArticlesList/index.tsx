import { FetchArticlesQuery } from 'generated/types';
import { Link, List, ListItem, Box, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ArticleBreadcrumb } from 'components/ArticleBreadcrumb';
import { ARTICLE_PAGINATION_PAGE_SIZE } from 'lib/constants';

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
    alt: 'Aktualności',
    href: '/aktualnosci',
    title: 'Aktualności',
    isCurrentPage: true,
    isTruncated: true,
  },
];
export const ArticlesList: React.FC<FetchArticlesQuery & PaginationInfo> = ({ articles }) => {
  const pagesCollection: number[] = [];
  const totalPages = Math.ceil(articles.total / ARTICLE_PAGINATION_PAGE_SIZE);
  for (let i = 0; i < totalPages; i++) {
    pagesCollection.push(i + 1);
  }
  return (
    <Box maxWidth={'container.xl'} margin="auto" px="20px">
      <Box my={3}>
        <ArticleBreadcrumb navItems={navItems} />
      </Box>
      <Box as="article">
        <Heading as="h1" mb={3}>
          Aktualności
        </Heading>
        <List>
          {articles.items.map((article) => {
            return (
              <ListItem key={article.sys.id}>
                <Link as={NextLink} href={`/aktualnosci/${article.slug}`}>
                  {article.title}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <List>
        {pagesCollection.map((page) => {
          const link =
            page === 1 ? (
              <Link as={NextLink} href={`/aktualnosci`}>
                {page}
              </Link>
            ) : (
              <Link as={NextLink} href={`/aktualnosci/strona/${page}`}>
                {page}
              </Link>
            );
          return <ListItem key={page}>{link}</ListItem>;
        })}
      </List>
    </Box>
  );
};
