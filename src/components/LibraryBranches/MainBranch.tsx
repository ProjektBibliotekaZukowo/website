import { Box, Flex, Heading, Link, VStack, Text, Stack, useDisclosure } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { AddressMap } from './AddressMap';
import { OpeningHoursButton } from '../OpeningHoursButton';
import { OpeningTimesSchedule } from './OpeningTimesSchedule';
import { LibraryContactDetails } from './LibraryContactDetails';

type Branch = FetchHomeQuery['branches']['items'][0];

interface IMainBranch {
  branch: Branch;
}

export const MainBranch = ({ branch }: IMainBranch) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box w="6xl">
      <Flex justifyContent="space-between">
        {isOpen ? (
          <OpeningTimesSchedule branch={branch} toggle={onClose} />
        ) : (
          <VStack as="address" align="stretch" spacing={8} maxW="md">
            <Heading as="h3" fontSize="22px">
              {branch.name}
            </Heading>
            <LibraryContactDetails branch={branch} textAlign="start" spacing={1} fontSize="lg" />
            <OpeningHoursButton text="Godziny otwarcia" tabIndex={2} onClick={onOpen} />
          </VStack>
        )}
        <Box w="xl">
          <AddressMap lat={branch.address.lokalizacja.lat} lon={branch.address.lokalizacja.lon} />
        </Box>
      </Flex>
    </Box>
  );
};
