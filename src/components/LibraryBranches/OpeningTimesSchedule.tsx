import { FetchHomeQuery } from '../../generated/types';
import { Box, Button, Table, Tbody, Tr, Td } from '@chakra-ui/react';
import { parseAndFormatOpenings } from '../../lib/utils/parseAndFormatOpenings';
import { workingWeek } from '../../lib/constants';

type Branch = FetchHomeQuery['branches']['items'][0];

interface OpeningTimesScheduleProps {
  branch: Branch;
  toggle: () => void;
}

export const OpeningTimesSchedule = ({ branch, toggle }: OpeningTimesScheduleProps) => {
  const openFrom = (weekday: string): string => {
    return branch.openingTimes[`${weekday}From`];
  };

  const openTo = (weekday: string): string => {
    return branch.openingTimes[`${weekday}To`];
  };

  const closed = (openFrom, openTo) => Boolean(!(openFrom || openTo));
  return (
    <Box>
      <Button onClick={toggle}>x</Button>
      <Table>
        <Tbody>
          {workingWeek.map((workingDay) => {
            const from: string = openFrom(workingDay.en);
            const to: string = openTo(workingDay.en);
            return (
              <Tr key={workingDay.pl}>
                <Td>{workingDay.pl}:</Td>
                <Td>{closed(from, to) ? 'nieczynne' : parseAndFormatOpenings(from, to)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
