import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { parseAndFormatOpenings } from '../../lib/utils/parseAndFormatOpenings';

type Branch = FetchHomeQuery['branches']['items'][0];
interface IBranchOpeningTime {
  branch: Branch;
}

export const BranchOpeningTime = ({ branch }: IBranchOpeningTime) => {
  const d = new Date();
  const weekday = d.toLocaleDateString('en-us', { weekday: 'long' }).toLowerCase();
  const fromProp = `${weekday}From`;
  const toProp = `${weekday}To`;
  const openFrom: string = branch.openingTimes[fromProp];
  const openTo: string = branch.openingTimes[toProp];

  const closed = Boolean(!(openFrom || openTo));

  return (
    <Box
      px={4}
      py={2}
      borderColor="brand.black"
      border="1px"
      borderRadius="md"
      display="flex"
      alignItems="baseline"
      backgroundColor="white"
      fontSize="sm"
    >
      {branch.address.miejscowosc}:
      <Text color={closed ? 'brand.red' : 'brand.blue'} ml={2}>
        {closed ? 'nieczynne' : parseAndFormatOpenings(openFrom, openTo)}
      </Text>
    </Box>
  );
};
