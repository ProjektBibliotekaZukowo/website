import ArticlesList, { PaginationInfo } from 'components/ArticlesList';
import { FetchArticlesQuery } from 'generated/types';
import { getArticlesPage } from 'lib/api';
import { GetStaticProps } from 'next';
import React from 'react';

export default function ArticlesIndex({
  articles,
  currentPage,
}: FetchArticlesQuery & PaginationInfo) {
  return <ArticlesList articles={articles} currentPage={currentPage} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = 1;
  const { data } = await getArticlesPage({
    preview: params ? params.preview != undefined : false,
    page: currentPage,
  });

  return {
    props: { ...data, currentPage },
  };
};
