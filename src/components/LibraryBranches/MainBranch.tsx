import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  VStack,
  Text,
  Stack,
  Divider,
  Button,
} from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { AddressMap } from './AddressMap';
import { OpeningHoursButton } from '../OpeningHoursButton';
import { useState } from 'react';
import { OpeningTimesSchedule } from './OpeningTimesSchedule';

type Branch = FetchHomeQuery['branches']['items'][0];

interface IMainBranch {
  branch: Branch;
}

export const MainBranch = ({ branch }: IMainBranch) => {
  const { miejscowosc, kodPocztowy, ulica, numer, numerTelefonu, email } = branch.address;

  const [showOpeningHours, setShowOpeningHours] = useState<boolean>(false);

  const toggleShowOpeningHours = () => {
    setShowOpeningHours(!showOpeningHours);
  };

  return (
    <Box w="6xl">
      <Flex justifyContent="space-between">
        {showOpeningHours ? (
          <OpeningTimesSchedule
            branch={branch}
            toggle={toggleShowOpeningHours}
          ></OpeningTimesSchedule>
        ) : (
          <VStack as="address" align="stretch" spacing={8} maxW={'md'}>
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

              {numerTelefonu.map((num) => {
                return (
                  <Link key={num} href={`tel:${num}`} isExternal>
                    {num}
                  </Link>
                );
              })}

              {email.map((mail) => {
                return (
                  <Link key={mail} href={`email:${mail}`} isExternal>
                    {mail}
                  </Link>
                );
              })}
            </Stack>
            <OpeningHoursButton
              text={'Godziny otwarcia'}
              tabIndex={2}
              onClick={toggleShowOpeningHours}
            />
          </VStack>
        )}
        <Box w="xl">
          <AddressMap lat={branch.address.lokalizacja.lat} lon={branch.address.lokalizacja.lon} />
        </Box>
      </Flex>
    </Box>
  );
};
