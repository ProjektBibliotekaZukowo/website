import { Box } from '@chakra-ui/react';
import { Logo } from '../logo';
import { FooterSignatureDetails } from './FooterSignatureDetails';
import { FooterSignatureSocialMedia } from './FooterSignatureSocialMedia';

export const FooterSignature = ({ branches }) => {
  return (
    <Box mx="20px">
      <Logo />
      <FooterSignatureDetails branches={branches} />
      <FooterSignatureSocialMedia />
    </Box>
  );
};
