import { GetStaticProps } from 'next';
import React from 'react';
import { Link, List, ListItem } from '@chakra-ui/react';
import { FetchArticlesQuery } from 'generated/types';
import { getArticlesPage } from 'lib/api';
import NextLink from 'next/link';

type PaginationInfo = {
  currentPage: number;
};
// TODO Fetch first 10 articles
// TODO paginate results
export default function ArticlesList({
  articles,
  currentPage,
}: FetchArticlesQuery & PaginationInfo) {
  return (
    <>
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
    </>
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
