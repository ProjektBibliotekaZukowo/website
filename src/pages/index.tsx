import { LibraryBranches } from 'components/LibraryBranches';
import { NewsArticles } from 'components/NewsArticles';
import { OpeningTimes } from 'components/OpeningTimes';
import { TopArticles } from 'components/TopArticles';
import { PartnersSection } from 'components/PartnersSection';
import { ArticleCollection, BranchCollection, PartnerCollection } from 'generated/types';
import { getHomePage } from 'lib/api';
import { GetStaticProps } from 'next';
import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Index({
  branches,
  latestArticles,
  newsArticles,
  mainBranch,
  partners,
}: {
  branches: BranchCollection;
  latestArticles: ArticleCollection;
  newsArticles: ArticleCollection;
  mainBranch: BranchCollection;
  partners: PartnerCollection;
}) {
  return (
    <>
      <OpeningTimes branches={branches} />
      <Box maxWidth={'container.xl'} margin="auto" px="20px">
        <TopArticles latestArticles={latestArticles} />
        <LibraryBranches branches={branches} mainBranch={mainBranch} />
        <NewsArticles newsArticles={newsArticles} />
        <PartnersSection partners={partners} />
      </Box>
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
