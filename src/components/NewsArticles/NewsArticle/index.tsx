import { Heading, Icon, VStack, Text } from '@chakra-ui/react';
import { ChakraNextImage } from 'components/ChakraNextImage';
import { Link } from '@chakra-ui/next-js';
import NextLink from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import RichTextResponse from 'components/RichTextResponse';

interface INewsArticle {
  title?: string;
  slug?: string;
  body?: string;
  description?: any;
  heroImage?: { description?: string; title?: string; url?: string };
}
export const NewsArticle = ({ title, slug, description, heroImage }: INewsArticle) => {
  return (
    <VStack
      align="stretch"
      w="xs"
      minH="max"
      role="group"
      boxShadow="0px 0px 20px #00000019"
      verticalAlign="center"
      mb={1}>
      <ChakraNextImage
        src={heroImage.url}
        opacity="0.7"
        height={150}
        _groupHover={{ opacity: 1 }}
        alt={heroImage.description}
      />
      <VStack p={10} spacing={4} alignItems="start">
        <Heading as="h4" noOfLines={4} width="100%" size="md">
          {title}
        </Heading>
        <Text as="div" noOfLines={5}>
          <RichTextResponse richTextResponse={description}></RichTextResponse>
        </Text>
        <Link
          as={NextLink}
          href={`/aktualnosci/${slug}`}
          display="flex"
          whiteSpace="nowrap"
          alignItems="center">
          <Text as="span" mr={2} fontSize="lg" transition="0.1s ease-in-out">
            Czytaj dalej
          </Text>
          <Icon
            as={BsArrowRight}
            boxSize={3}
            _groupHover={{ transform: 'translate(5px)', transition: '0.1s ease-in-out' }}
          />
        </Link>
      </VStack>
    </VStack>
  );
};
