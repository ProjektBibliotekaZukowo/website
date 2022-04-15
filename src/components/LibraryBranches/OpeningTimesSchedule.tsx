import { FetchHomeQuery } from '../../generated/types';
import {
  Box,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
  IconButton,
  useStyleConfig,
} from '@chakra-ui/react';
import { parseAndFormatOpenings } from '../../lib/utils/parseAndFormatOpenings';
import { workingWeek } from '../../lib/constants';
import { BsX } from 'react-icons/bs';

type Branch = FetchHomeQuery['branches']['items'][0];

interface OpeningTimesScheduleProps {
  branch: Branch;
  toggle: () => void;
  cover?: boolean;
}

export const OpeningTimesSchedule = ({
  branch,
  toggle,
  cover = false,
}: OpeningTimesScheduleProps) => {
  const openFrom = (weekday: string): string => {
    return branch.openingTimes[`${weekday}From`];
  };

  const openTo = (weekday: string): string => {
    return branch.openingTimes[`${weekday}To`];
  };
  const baseStyle = useStyleConfig('OpeningTimeSchedule', { variant: 'default' });
  const coverStyle = useStyleConfig('OpeningTimeSchedule', { variant: 'cover' });
  const closed = (openFrom: string, openTo: string) => Boolean(!(openFrom || openTo));
  return (
    <Box __css={cover ? coverStyle : baseStyle}>
      <Stack
        position="relative"
        border="1px solid #015D96"
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          position="absolute"
          display="flex"
          justifyContent="center"
          right={0}
          top={0}
          onClick={toggle}
          aria-label="Zamknij"
          fontSize="24px"
          color="brand.blue"
          icon={<BsX />}
          variant="unstyled"
        />
        <Table size="sm" variant="unstyled">
          <Tbody>
            {workingWeek.map((workingDay) => {
              const from: string = openFrom(workingDay.en);
              const to: string = openTo(workingDay.en);
              return (
                <Tr color={closed(from, to) && 'brand.red'} key={workingDay.pl}>
                  <Td fontSize="18px" textAlign="right">
                    {workingDay.pl}:
                  </Td>
                  <Td fontSize="18px">
                    {closed(from, to) ? 'nieczynne' : parseAndFormatOpenings(from, to)}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Stack>
    </Box>
  );
};
