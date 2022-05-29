import { Box, Flex, Heading, useDisclosure, VStack } from '@chakra-ui/react';
import { OpeningTimesSchedule } from './OpeningTimesSchedule';
import { AddressMap } from './AddressMap';
import { BranchContactDetails } from './BranchContactDetails';
import { OpeningHoursButton } from '../OpeningHoursButton';

export const Branch = ({ branch }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box
      key={branch.name}
      w={[400, 400, 400, 400, 450]}
      m="25px"
      boxShadow="0px 0px 20px #00000019"
      position="relative"
    >
      <Flex justifyContent="center">
        <VStack as="address" w="100%" textAlign="center" pt="10px" pb="40px">
          <Heading as="h3" fontSize="22px " p="20px">
            {branch.name}
          </Heading>
          <AddressMap
            lat={branch.address.lokalizacja.lat}
            lon={branch.address.lokalizacja.lon}
            height={165}
          />
          <BranchContactDetails spacing={1} branch={branch} shortDescription={false} />
          <OpeningHoursButton text="Godziny otwarcia" tabIndex={2} onClick={onOpen} />
        </VStack>
        {isOpen && (
          <OpeningTimesSchedule branch={branch} toggle={onClose} cover></OpeningTimesSchedule>
        )}
      </Flex>
    </Box>
  );
};
