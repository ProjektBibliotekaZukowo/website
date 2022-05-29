import {
  Box,
  Flex,
  Heading,
  VStack,
  useDisclosure,
  SimpleGrid,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { AddressMap } from './AddressMap';
import { OpeningHoursButton } from '../OpeningHoursButton';
import { OpeningTimesSchedule } from './OpeningTimesSchedule';
import { BranchContactDetails } from './BranchContactDetails';

type Branch = FetchHomeQuery['mainBranch']['items'][0];

interface IMainBranch {
  branch: Branch;
}

export const MainBranch = ({ branch }: IMainBranch) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box
        position="relative"
        order={{ base: 2, lg: 1 }}
        mr={{ base: 0, lg: '20px' }}
        mt={{ base: '20px', lg: 0 }}
      >
        <Flex>
          <VStack as="address" align="stretch" visibility={isOpen ? 'hidden' : 'unset'}>
            <Heading as="h3" fontSize="22px">
              {branch.name}
            </Heading>
            <BranchContactDetails branch={branch} textAlign="start" spacing={1} fontSize="lg" />
            <OpeningHoursButton text="Godziny otwarcia" tabIndex={2} onClick={onOpen} />
          </VStack>
          {isOpen && <OpeningTimesSchedule branch={branch} toggle={onClose} cover />}
        </Flex>
      </Box>
      <Flex order={{ base: 1, lg: 2 }} justify={{ base: 'center', lg: 'flex-end' }}>
        <Box w="xl" justifyContent={{ base: 'center', lg: 'flex-end' }}>
          <AddressMap lat={branch.address.lokalizacja.lat} lon={branch.address.lokalizacja.lon} />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
