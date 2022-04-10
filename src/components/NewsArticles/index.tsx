import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { SITE_NEWS_SECTION_TITLE } from 'lib/constants';
import { NewsArticle } from './NewsArticle';

interface INewsArticles {
  newsArticles: FetchHomeQuery['newsArticles'];
}

export const NewsArticles = ({ newsArticles }: INewsArticles) => {
  return (
    <Box w="6xl" h="md" margin="auto">
      <VStack alignContent="center" alignItems="center" justifyContent={'center'}>
        <Heading as="h2" my={50}>
          {SITE_NEWS_SECTION_TITLE}
        </Heading>
        <HStack spacing="10">
          {newsArticles.items.map((article) => (
            <NewsArticle key={article.slug} {...article} />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};
