import { Box, Flex, Heading, useDisclosure, VStack } from '@chakra-ui/react';
import { OpeningTimesSchedule } from './OpeningTimesSchedule';
import { AddressMap } from './AddressMap';
import { LibraryContactDetails } from './LibraryContactDetails';
import { OpeningHoursButton } from '../OpeningHoursButton';

export const Branch = ({ branch }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box key={branch.name} w={[300, 450]} pt="15px" pb="40px" boxShadow="0px 0px 20px #00000019">
      <Flex justifyContent="center">
        {isOpen ? (
          <OpeningTimesSchedule branch={branch} toggle={onClose}></OpeningTimesSchedule>
        ) : (
          <VStack as="address" w="100%" textAlign="center">
            <Heading as="h3" fontSize="22px " p="20px">
              {branch.name}
            </Heading>
            <AddressMap
              lat={branch.address.lokalizacja.lat}
              lon={branch.address.lokalizacja.lon}
              height={165}
            />
            <LibraryContactDetails branch={branch} />
            <OpeningHoursButton text="Godziny otwarcia" tabIndex={2} onClick={onOpen} />
          </VStack>
        )}
      </Flex>
    </Box>
  );
};
