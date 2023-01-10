import { Heading, VStack } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { MainBranch } from './MainBranch';
import { OtherBranches } from './OtherBranches';

interface ILibraryBranches {
  branches: FetchHomeQuery['branches'];
  mainBranch: FetchHomeQuery['mainBranch'];
}

export const LibraryBranches = ({ branches, mainBranch }: ILibraryBranches) => {
  const otherBranches = branches.items;
  const theMainBranch = mainBranch.items[0];
  return (
    <>
      <Heading as="h2" py={12} textAlign="center">
        Filie Biblioteki Samorządowej w Żukowie
      </Heading>
      <MainBranch branch={theMainBranch} />
      <OtherBranches branches={otherBranches} />
    </>
  );
};
