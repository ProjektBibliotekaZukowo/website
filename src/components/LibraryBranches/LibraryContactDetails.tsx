import { FetchHomeQuery } from '../../generated/types';
import { Link, Stack, Text } from '@chakra-ui/react';

type Branch = FetchHomeQuery['branches']['items'][0];

interface IBranch {
  branch: Branch;
  spacing?: number | string;
  textAlign?: 'start' | 'center';
  fontSize?: string;
}

export const LibraryContactDetails = ({ branch, spacing, textAlign, fontSize }: IBranch) => {
  const { miejscowosc, kodPocztowy, ulica, numer, numerTelefonu, email } = branch.address;

  return (
    <Stack spacing={spacing} fontSize={fontSize} textAlign={textAlign}>
      <Text>{branch.shortDescription}</Text>
      {ulica && (
        <Text>
          ul. {ulica} {numer}
        </Text>
      )}
      <Text>
        {kodPocztowy} {miejscowosc}
      </Text>

      {numerTelefonu?.map((num) => {
        return (
          <Link key={num} href={`tel:${num}`} isExternal>
            {num}
          </Link>
        );
      })}

      {email?.map((mail) => {
        return (
          <Link key={mail} href={`email:${mail}`} isExternal>
            {mail}
          </Link>
        );
      })}
    </Stack>
  );
};
