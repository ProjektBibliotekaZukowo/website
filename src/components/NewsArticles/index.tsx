import { Box, Button, Heading, HStack, VStack, Text, Icon } from '@chakra-ui/react';
import { FetchHomeQuery } from 'generated/types';
import { routes, SITE_NEWS_MORE_NEWS, SITE_NEWS_SECTION_TITLE } from 'lib/constants';
import { NextLink } from 'lib/NextLink';
import { BsArrowRight } from 'react-icons/bs';
import { NewsArticle } from './NewsArticle';

interface INewsArticles {
  newsArticles: FetchHomeQuery['newsArticles'];
}

export const NewsArticles = ({ newsArticles }: INewsArticles) => {
  return (
    <Box w="6xl" margin="auto">
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
          <NextLink href={routes.AKTUALNOSCI}>
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
          </NextLink>
        </Box>
      </VStack>
    </Box>
  );
};
