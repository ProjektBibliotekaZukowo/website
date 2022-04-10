import { Box, Flex, Heading, Link, VStack, Text, Stack, useDisclosure } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { AddressMap } from './AddressMap';
import { OpeningHoursButton } from '../OpeningHoursButton';
import { OpeningTimesSchedule } from './OpeningTimesSchedule';

type Branch = FetchHomeQuery['branches']['items'][0];

interface IMainBranch {
  branch: Branch;
}

export const MainBranch = ({ branch }: IMainBranch) => {
  const { miejscowosc, kodPocztowy, ulica, numer, numerTelefonu, email } = branch.address;

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box w="6xl">
      <Flex justifyContent="space-between">
        {isOpen ? (
          <OpeningTimesSchedule branch={branch} toggle={onClose}></OpeningTimesSchedule>
        ) : (
          <VStack as="address" align="stretch" spacing={8} maxW="md">
            <Heading as="h3" fontSize="22px">
              {branch.name}
            </Heading>

            <Stack spacing={1} textAlign="start" fontSize="lg">
              <Text>{branch.shortDescription}</Text>
              {ulica && (
                <Text>
                  ul. {ulica} {numer}
                </Text>
              )}
              <Text>
                {kodPocztowy} {miejscowosc}
              </Text>

              {(numerTelefonu || []).map((num) => {
                return (
                  <Link key={num} href={`tel:${num}`} isExternal>
                    {num}
                  </Link>
                );
              })}

              {(email || []).map((mail) => {
                return (
                  <Link key={mail} href={`email:${mail}`} isExternal>
                    {mail}
                  </Link>
                );
              })}
            </Stack>
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
