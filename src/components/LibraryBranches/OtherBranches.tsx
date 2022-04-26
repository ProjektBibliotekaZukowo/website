import { Grid, GridItem, Box, Flex } from '@chakra-ui/react';
import { FetchHomeQuery } from '../../generated/types';

import { Branch } from './Branch';

type Branches = FetchHomeQuery['branches']['items'];

interface AllBranches {
  branches: Branches;
}

export const OtherBranches = ({ branches }: AllBranches) => {
  return (
    <Box py="40px">
      <Flex flexWrap="wrap" justifyContent="center">
        {branches.map((branch) => {
          return <Branch key={branch.name} branch={branch} />;
        })}
      </Flex>
    </Box>
  );
};
