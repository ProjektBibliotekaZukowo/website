import { Box } from '@chakra-ui/react';
import { Logo } from '../logo';
import { FooterSignatureDetails } from './FooterSignatureDetails';

export const FooterSignature = () => {
  return (
    <Box>
      <Logo />
      <FooterSignatureDetails />
    </Box>
  );
};
