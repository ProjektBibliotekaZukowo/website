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
// import NextLink from 'next/link';
import { FetchHomeQuery } from 'generated/types';
import { AddressMap } from './AddressMap';

type Branch = FetchHomeQuery['branches']['items'][0];
interface IMainBranch {
  branch: Branch;
}
export const MainBranch = ({ branch }: IMainBranch) => {
  const { miejscowosc, kodPocztowy, ulica, numer, numerTelefonu, email } = branch.address;
  return (
    <Box w="6xl">
      <Flex justifyContent="space-between">
        <VStack as="address" align="stretch" spacing={8} maxW={'md'}>
          <Heading as="h3" size="md">
            {branch.name}
          </Heading>

          <Stack spacing={1} textAlign="start">
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
          <Button variant="outline">Godziny Otwarcia</Button>
        </VStack>
        <Box w="xl">
          <AddressMap lat={branch.address.lokalizacja.lat} lon={branch.address.lokalizacja.lon} />
        </Box>
      </Flex>
    </Box>
  );
};
