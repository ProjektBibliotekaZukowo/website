import { Box, Text } from '@chakra-ui/react';
import { FetchHomeQuery } from '../../generated/types';

type Branches = FetchHomeQuery['branches']['items'];

interface AllBranches {
  branches: Branches;
}

export const OtherBranches = ({ branches }: AllBranches) => {
  console.log(branches);

  return (
    <Box w="6xl" pt="50px">
      {branches.map((branch) => {
        return (
          <Box key={branch.name}>
            <Text>{branch.name}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
