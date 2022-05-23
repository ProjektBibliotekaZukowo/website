import { Box, Flex } from '@chakra-ui/react';

import { FooterSignature } from './FooterSignature';
import { FooterNavigation } from './FooterNavigation';
import { FooterQuickLinks } from './FooterQuickLinks';

export const Footer = ({ branches }) => {
  return (
    <>
      <Box bgColor="#EBEBEA" py="50px">
        <Flex justify="space-between" flexWrap="wrap" maxWidth={'container.xl'} margin="auto">
          {branches?.items?.length && <FooterSignature branches={branches} />}
          <FooterNavigation />
          <FooterQuickLinks />
        </Flex>
      </Box>
    </>
  );
};
