import { Center, HStack, Text } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { BranchOpeningTime } from './BranchOpeningTime';

interface IOpeningTimes {
  branches: FetchHomeQuery['branches'];
}

export const OpeningTimes = ({ branches }: IOpeningTimes) => {
  return (
    <Center h={20} bgColor="gray.100" zIndex={-1} position="relative" verticalAlign={'middle'}>
      <Text as="span" fontSize="lg" fontWeight="600">
        Dziś jesteśmy otwarci:
      </Text>
      <HStack spacing={4} fontWeight={800} ml={4}>
        {branches.items.map((b) => (
          <BranchOpeningTime key={b.sys.id} branch={b} />
        ))}
      </HStack>
    </Center>
  );
};
