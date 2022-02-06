import { Box, Flex, Heading, Icon, Link, VStack, Text } from '@chakra-ui/react';
// import NextLink from 'next/link';
import { FetchHomeQuery } from 'generated/types';

type Branch = FetchHomeQuery['branches']['items'][0];
interface IMainBranch {
  branch: Branch;
}
export const MainBranch = ({ branch }: IMainBranch) => {
  return (
    <Box border="1px" width="6xl">
      <Flex justifyContent="space-between">
        <VStack h="lg" align="stretch" spacing={8} maxW={'md'}>
          <Heading as="h3">{branch.name}</Heading>
          <Text as="p" textAlign="start">
            {branch.shortDescription}
          </Text>

          <Text as="p" textAlign="start">
            Address details
          </Text>
        </VStack>
        <Box w="xl" h="lg"></Box>
      </Flex>
    </Box>
  );
};
