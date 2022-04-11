import { Heading, Icon, Link, VStack, Text, Box } from '@chakra-ui/react';
import { ChakraNextImage } from 'components/ChakraNextImage';
import { NextLink } from 'lib/NextLink';
import { BsArrowRight } from 'react-icons/bs';

interface INewsArticle {
  title?: string;
  slug?: string;
  body?: string;
  description?: string;
  heroImage?: { description?: string; title?: string; url?: string };
}
export const NewsArticle = ({ title, slug, description, heroImage }: INewsArticle) => {
  return (
    <VStack align="stretch" w="xs" minH="max" role="group" shadow="2xl" verticalAlign="center">
      <ChakraNextImage
        src={heroImage.url}
        width={356}
        height={160}
        opacity="0.7"
        _groupHover={{ opacity: 1 }}
      />
      <VStack p={10} spacing={4} alignItems="start">
        <Heading as="h4" noOfLines={4}>
          {title}
        </Heading>
        <Text as="p" textAlign="start" noOfLines={5} fontSize="lg">
          {description}
        </Text>
        <NextLink href={`/aritcles/${slug}`}>
          <Link display="flex" whiteSpace="nowrap" alignItems="center">
            <Text as="span" mr={2} fontSize="lg" transition="0.1s ease-in-out">
              Czytaj dalej
            </Text>
            <Icon
              as={BsArrowRight}
              boxSize={3}
              _groupHover={{ transform: 'translate(5px)', transition: '0.1s ease-in-out' }}
            />
          </Link>
        </NextLink>
      </VStack>
    </VStack>
  );
};