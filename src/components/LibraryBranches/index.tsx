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
    <VStack alignContent={'center'} alignItems="center" justifyContent={'center'}>
      <Heading as="h2" py={12}>
        Filie Biblioteki Samorządowej w Żukowie
      </Heading>
      <MainBranch branch={theMainBranch} />
      <OtherBranches branches={otherBranches} />
    </VStack>
  );
};
