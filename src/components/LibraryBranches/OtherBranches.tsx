import { SimpleGrid } from '@chakra-ui/react';
import { FetchHomeQuery } from '../../generated/types';

import { Branch } from './Branch';

type Branches = FetchHomeQuery['branches']['items'];

interface AllBranches {
  branches: Branches;
}

export const OtherBranches = ({ branches }: AllBranches) => {
  return (
    <SimpleGrid columns={[1, null, null, 2]} spacing="50px">
      {branches.map((branch) => {
        return <Branch key={branch.name} branch={branch} />;
      })}
    </SimpleGrid>
  );
};
