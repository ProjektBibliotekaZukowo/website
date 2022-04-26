import { Heading, VStack } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { MainBranch } from './MainBranch';
import { OtherBranches } from './OtherBranches';

interface ILibraryBranches {
  branches: FetchHomeQuery['branches'];
}

export const LibraryBranches = ({ branches }: ILibraryBranches) => {
  const mainBranch = branches.items[0];
  const otherBranches = branches.items.slice(1);
  return (
    <VStack alignContent={'center'} alignItems="center" justifyContent={'center'}>
      <Heading as="h2" py={12}>
        Filie Biblioteki Samorządowej w Żukowie
      </Heading>
      <MainBranch branch={mainBranch} />
      <OtherBranches branches={otherBranches} />
    </VStack>
  );
};
