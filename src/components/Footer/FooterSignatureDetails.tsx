import { FetchHomeQuery } from '../../generated/types';
import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

interface ILibraryBranches {
  branches: FetchHomeQuery['branches'];
}

export const FooterSignatureDetails = ({ branches }: ILibraryBranches) => {
  const branchDetails = branches['items'][0];
  const { address, shortDescription } = branchDetails;

  return (
    <Stack fontSize="13px" fontWeight={600} color="#000021" spacing={1} mt="14px">
      <Text>{shortDescription}</Text>
      <Text>{address.ulica}</Text>
      <Text>
        {address.kodPocztowy} {address.miejscowosc}
      </Text>
      <Text>{address.numerTelefonu}</Text>
      <UnorderedList spacing={1} styleType="none">
        {address.email?.map((email, index) => {
          return <ListItem key={email + index}>{email}</ListItem>;
        })}
      </UnorderedList>
    </Stack>
  );
};
