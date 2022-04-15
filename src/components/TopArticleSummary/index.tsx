import { Box, Flex, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChakraNextImage } from 'components/ChakraNextImage';
import { FetchHomeQuery } from 'generated/types';
import { BsArrowRight } from 'react-icons/bs';

type Article = FetchHomeQuery['latestArticles']['items'][0];
interface ITopArticleSummary {
  article: Article;
}
export const TopArticleSummary = ({ article }: ITopArticleSummary) => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <VStack h="lg" align="stretch" spacing={8} maxW={'md'}>
          <Box h={12}></Box>
          <Heading as="h3" noOfLines={4}>
            {article.title}
          </Heading>
          <Text as="p" textAlign="start" noOfLines={5} fontSize="lg">
            {article.description}
          </Text>
          <NextLink href={`/aritcles/${article.slug}`} passHref>
            <Link display="flex" alignItems="center" whiteSpace={'nowrap'}>
              <Text as="span" mr={2} fontSize="lg">
                Czytaj dalej
              </Text>
              <Icon as={BsArrowRight} boxSize={3} />
            </Link>
          </NextLink>
        </VStack>
        <Box w="xl" h="lg">
          <ChakraNextImage src={article.heroImage.url} width={576} height={448}></ChakraNextImage>
        </Box>
      </Flex>
    </Box>
  );
};
