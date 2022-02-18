import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';

type Branch = FetchHomeQuery['branches']['items'][0];
interface IBranchOpeningTime {
  branch: Branch;
}

const parseAndFormat = (openFrom: string, openTo: string) => {
  const from = new Date(openFrom);
  const to = new Date(openTo);

  const timeFrom = from.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
  const timeTo = to.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
  return `${timeFrom}-${timeTo}`;
};
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
    >
      {branch.address.miejscowosc}:
      <Text color={closed ? 'brand.red' : 'brand.blue'} ml={2}>
        {closed ? 'nieczynne' : parseAndFormat(openFrom, openTo)}
      </Text>
    </Box>
  );
};
