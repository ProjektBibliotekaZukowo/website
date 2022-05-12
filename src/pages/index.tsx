import { LibraryBranches } from 'components/LibraryBranches';
import { NewsArticles } from 'components/NewsArticles';
import { OpeningTimes } from 'components/OpeningTimes';
import { TopArticles } from 'components/TopArticles';
import { FetchHomeQuery } from 'generated/types';
import { getHomePage } from 'lib/api';
import { GetStaticProps } from 'next';
import React from 'react';

export default function Index({
  branches,
  latestArticles,
  newsArticles,
  mainBranch,
}: FetchHomeQuery) {
  return (
    <>
      <OpeningTimes branches={branches} />
      <TopArticles latestArticles={latestArticles} />
      <LibraryBranches branches={branches} mainBranch={mainBranch} />
      <NewsArticles newsArticles={newsArticles} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await getHomePage({
    preview: params ? params.preview != undefined : false,
  });

  return {
    props: { ...data },
  };
};
