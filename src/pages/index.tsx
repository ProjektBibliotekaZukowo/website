import { LibraryBranches } from 'components/LibraryBranches';
import { NewsArticles } from 'components/NewsArticles';
import { OpeningTimes } from 'components/OpeningTimes';
import { TopArticles } from 'components/TopArticles';
import { FetchHomeQuery } from 'generated/types';
import { getHomePage } from 'lib/api';
import { GetStaticProps } from 'next';
import React from 'react';
import { Footer } from '../components/Footer/Footer';

export default function Index({ branches, latestArticles, newsArticles }: FetchHomeQuery) {
  return (
    <>
      <OpeningTimes branches={branches} />
      <TopArticles latestArticles={latestArticles} />
      <LibraryBranches branches={branches} />
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
