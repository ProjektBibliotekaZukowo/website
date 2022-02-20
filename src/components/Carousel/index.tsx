import { Box, Circle, HStack } from '@chakra-ui/react';
import React from 'react';

interface ICarousel {
  elements: React.ReactNode[];
}

export const Carousel = ({ elements }: ICarousel) => {
  const [slide, setSlide] = React.useState(0);

  const indices = [...Array(elements.length).keys()];
  return (
    <>
      {elements.length && (
        <Box position="relative" top={8}>
          <HStack position="absolute">
            {indices.map((i) => (
              <Circle
                as="button"
                size={5}
                key={i}
                border="3px solid"
                borderColor={'brand.blue'}
                onClick={() => {
                  setSlide(i);
                }}
                bgColor={i === slide ? 'transparent' : 'brand.blue'}
                _hover={{ cursor: 'pointer' }}
              ></Circle>
            ))}
          </HStack>
        </Box>
      )}

      {elements[slide]}
    </>
  );
};
