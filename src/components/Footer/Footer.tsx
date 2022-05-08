import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { routes } from '../../lib/constants';
import { NextLink } from 'lib/NextLink';
import { FooterSignature } from './FooterSignature';

const Links = [
  { title: 'O nas', href: routes.O_NAS },
  { title: 'Aktualności', href: routes.AKTUALNOSCI },
  { title: 'Kontakt', href: routes.KONTAKT },
];

export const Footer = ({ branches }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="#EBEBEA" py="50px">
        <Flex justify="space-between">
          {branches.items?.length && <FooterSignature branches={branches} />}
          <Box>test2</Box>
          <Box>test3</Box>
          <Box>test4</Box>
        </Flex>
      </Box>
    </>
  );
};
