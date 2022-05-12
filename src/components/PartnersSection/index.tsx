import React from 'react';
import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { ChakraNextImage } from 'components/ChakraNextImage';
import { FetchHomeQuery } from 'generated/types';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

interface IPartnersSection {
  partners: FetchHomeQuery['partners'];
}

const numberOfItems = 3;

export const PartnersSection = ({ partners }: IPartnersSection) => {
  const [slide, setSlide] = React.useState(0);

  const noOfSlides = Math.ceil(partners.items.length / numberOfItems);
  const currentItems = partners.items.slice(slide * numberOfItems, (slide + 1) * numberOfItems);

  return (
    <VStack alignItems="center">
      <Heading as="h2" py={12}>
        Partnerzy
      </Heading>
      <Flex alignItems="center" w="100%">
        <Box w="10%">
          <Center>
            <IconButton
              icon={<BsArrowLeftCircle />}
              aria-label={'Poprzednia strona partnerów'}
              variant="ghost"
              size="lg"
              onClick={() => {
                if (slide === 0) {
                  setSlide(noOfSlides - 1);
                } else {
                  setSlide(slide - 1);
                }
              }}
            />
          </Center>
        </Box>
        <Spacer />
        <Stack spacing={20} direction="row">
          {currentItems.map((partner, index) => {
            if (!partner.logo.url) return null;
            return (
              <Box key={index}>
                <ChakraNextImage
                  src={partner.logo.url}
                  width={263}
                  height={140}
                  key={index + slide * numberOfItems}
                />
              </Box>
            );
          })}
        </Stack>
        <Spacer />
        <Box w="10%">
          <Center>
            <IconButton
              icon={<BsArrowRightCircle />}
              aria-label={'Następna strona partnerów'}
              variant="ghost"
              onClick={() => {
                setSlide((slide + 1) % noOfSlides);
              }}
            />
          </Center>
        </Box>
      </Flex>

      <Box py={8}>
        {noOfSlides > 0 && (
          <HStack>
            {[...Array(noOfSlides).keys()].map((i) => (
              <Circle
                as="button"
                size={5}
                key={i}
                border="3px solid"
                borderColor={'brand.blue'}
                onClick={() => {
                  setSlide(i);
                }}
                bgColor={i === slide ? 'brand.blue' : 'transparent'}
                _hover={{ cursor: 'pointer' }}
              ></Circle>
            ))}
          </HStack>
        )}
      </Box>
    </VStack>
  );
};
