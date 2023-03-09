import { Flex, Heading, Icon, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
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
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <VStack
        order={{ base: 2, lg: 1 }}
        spacing={8}
        alignItems="start"
        pt={{ base: '20px', lg: '80px' }}
        pb={{ base: '40px', lg: 'unset' }}
        pr={{ base: 0, lg: '20px' }}
      >
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
      <Flex order={{ base: 1, lg: 2 }} justify={{ base: 'center', lg: 'flex-end' }}>
        <ChakraNextImage src={article.heroImage.url} width={576} height={448}></ChakraNextImage>
      </Flex>
    </SimpleGrid>
  );
};
