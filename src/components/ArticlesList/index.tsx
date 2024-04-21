import { ArticleCollection, FetchArticlesQuery } from 'generated/types';
import { Link, List, ListItem, Box, Heading, Flex } from '@chakra-ui/react';
import { ArticleBreadcrumb } from 'components/ArticleBreadcrumb';
import { ARTICLE_PAGINATION_PAGE_SIZE } from 'lib/constants';
import { NewsArticle } from 'components/NewsArticles/NewsArticle';
import Pagination from 'components/Pagination';

export type IArticlesList = {
  currentPage: number;
  articles: ArticleCollection;
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
export const ArticlesList: React.FC<IArticlesList> = ({ articles, currentPage }) => {
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
        <Flex wrap={'wrap'} justifyContent={'space-between'} mb={5}>
          {articles.items.map((article) => (
            <NewsArticle key={article.slug} {...article} />
          ))}
        </Flex>
      </Box>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Box>
  );
};
