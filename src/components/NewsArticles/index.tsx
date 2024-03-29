import { Box, Button, Heading, HStack, VStack, Text, Icon } from '@chakra-ui/react';
import { ArticleCollection } from 'generated/types';
import { routes, SITE_NEWS_MORE_NEWS, SITE_NEWS_SECTION_TITLE } from 'lib/constants';
import { Link } from '@chakra-ui/next-js';
import NextLink from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { NewsArticle } from './NewsArticle';

interface INewsArticles {
  newsArticles: ArticleCollection;
}

export const NewsArticles = ({ newsArticles }: INewsArticles) => {
  return (
    <Box margin="auto">
      <VStack alignContent="center" alignItems="center" justifyContent="center">
        <Heading as="h2" my={50}>
          {SITE_NEWS_SECTION_TITLE}
        </Heading>
        <HStack spacing="10" alignItems="stretch">
          {newsArticles.items.map((article) => (
            <NewsArticle key={article.slug} {...article} />
          ))}
        </HStack>
        <Box>
          <Link as={NextLink} href={routes.AKTUALNOSCI}>
            <Button size="lg" role="group" mt={30} variant="primary">
              <Text as="span" mr={2} fontSize="lg">
                {SITE_NEWS_MORE_NEWS}
              </Text>
              <Icon
                as={BsArrowRight}
                boxSize={3}
                _groupHover={{ transform: 'translate(5px)', transition: '0.1s ease-in-out' }}
              />
            </Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};
