import { Box, Heading, HStack } from '@chakra-ui/react';
import { ChakraNextImage } from 'components/ChakraNextImage';
import { FetchHomeQuery } from 'generated/types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface IPartnersSection {
  partners: FetchHomeQuery['partners'];
}

export const PartnersSection = ({ partners }: IPartnersSection) => {
  return (
    <Box>
      <Heading as="h2" py={12}>
        {partners.items.map(() => {
          return;
        })}
      </Heading>
      <HStack>
        <BsArrowLeft />
        {partners.items.map((partner, index) => {
          if (!partner.logo.url) return null;
          return <ChakraNextImage src={partner.logo.url} key={index} width={263} height={140} />;
        })}
        <BsArrowRight />
      </HStack>
      <Box>Indicators</Box>
    </Box>
  );
};
