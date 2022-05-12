import { Flex, IconButton } from '@chakra-ui/react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export const FooterSignatureSocialMedia = () => {
  return (
    <Flex mt="8px">
      <IconButton
        aria-label="Idź do facebook"
        fontSize="24px"
        icon={<BsFacebook />}
        variant="unstyled"
      />
      <IconButton
        aria-label="Idź do instagram"
        fontSize="24px"
        icon={<BsInstagram />}
        variant="unstyled"
      />
    </Flex>
  );
};
