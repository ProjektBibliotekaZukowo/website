import { Heading, Icon, VStack, Text } from '@chakra-ui/react';
import { ChakraNextImage } from 'components/ChakraNextImage';
import { Link } from '@chakra-ui/next-js';
import NextLink from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Article } from 'generated/types';
import { RichTextResponseDescription } from 'components/RichTextResponseDescription';

export const NewsArticle = ({ title, slug, description, heroImage }: Article) => {
  return (
    <VStack align="stretch" w="xs" minH="max" role="group" shadow="2xl" verticalAlign="center">
      <ChakraNextImage
        src={heroImage.url}
        opacity="0.7"
        height={150}
        _groupHover={{ opacity: 1 }}
        alt={heroImage.description}
      />
      <VStack p={10} spacing={4} alignItems="start">
        <Heading as="h4" noOfLines={4} minHeight="6rem" width="100%" size="md">
          {title}
        </Heading>
        <RichTextResponseDescription description={description.json}></RichTextResponseDescription>
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
