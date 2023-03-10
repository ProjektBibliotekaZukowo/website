import {
  Center,
  HStack,
  Modal,
  ModalOverlay,
  Text,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { BranchOpeningTime } from './BranchOpeningTime';
import { OpeningHoursButton } from '../OpeningHoursButton';

interface IOpeningTimes {
  branches: FetchHomeQuery['branches'];
}

export const OpeningTimes = ({ branches }: IOpeningTimes) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log({ branches });
  function getBranches() {
    return (
      <>
        {branches.items.map((b) => (
          <BranchOpeningTime key={b.sys.id} branch={b} />
        ))}
      </>
    );
  }

  return (
    <>
      <Stack display={{ base: 'none', md: 'block' }} pt="100px">
        <Center
          p="20px"
          bgColor="gray.100"
          position="relative"
          verticalAlign={'middle'}
          display="flex"
          flexWrap="wrap">
          <Text as="span" fontSize="lg" fontWeight="600">
            Dziś jesteśmy otwarci:
          </Text>
          <HStack my="10px" spacing={4} fontWeight={800} ml={4}>
            {getBranches()}
          </HStack>
        </Center>
      </Stack>
      <Stack display={{ base: 'block', md: 'none' }} pt="100px">
        <Center h={20} bgColor="gray.100" position="relative" verticalAlign={'middle'}>
          <OpeningHoursButton text="Godziny otwarcia" tabIndex={2} onClick={onOpen} />
        </Center>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dziś jesteśmy otwarci:</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="20px 20px 40px">
            <VStack spacing={4} fontWeight={800} ml={4}>
              {getBranches()}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
