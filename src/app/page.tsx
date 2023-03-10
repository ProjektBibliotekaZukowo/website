import { LibraryBranches } from 'components/LibraryBranches';
import { NewsArticles } from 'components/NewsArticles';
import { OpeningTimes } from 'components/OpeningTimes';
import { TopArticles } from 'components/TopArticles';
import { PartnersSection } from 'components/PartnersSection';
import { getHomePage } from 'lib/api';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

export default async function Page() {
  const searchParams = useSearchParams();
  const preview = searchParams?.get('preview');

  const { data } = await getHomePage({ preview: preview != undefined });

  const { branches, latestArticles, mainBranch, newsArticles, partners } = data;

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
