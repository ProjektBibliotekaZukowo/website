import { Grid, GridItem, Box } from '@chakra-ui/react';
import { FetchHomeQuery } from '../../generated/types';

import { Branch } from './Branch';

type Branches = FetchHomeQuery['branches']['items'];

interface AllBranches {
  branches: Branches;
}

const getColSpan = (branches: Branches, index: number): number | Array<number> => {
  if (branches.length === 1 || (branches.length % 2 === 1 && branches.length === index + 1))
    return 2;
  return [2, 2, 1, 1];
};

export const OtherBranches = ({ branches }: AllBranches) => {
  return (
    <Box py="40px">
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        {branches.map((branch, index) => {
          return (
            <GridItem key={branch.name} colSpan={getColSpan(branches, index)} margin="auto">
              <Branch branch={branch} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
