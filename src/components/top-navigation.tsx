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
import { Logo } from './logo';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { routes } from '../lib/constants';
import { NextLink } from 'lib/NextLink';

const Links = [
  { title: 'O nas', href: routes.O_NAS },
  { title: 'Aktualności', href: routes.AKTUALNOSCI },
  { title: 'Kontakt', href: routes.KONTAKT },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        px={10}
        boxShadow={'0px 10px 20px #0000001A'}
        fontSize="xl"
      >
        <Flex h={'100px'} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            variant="unstyled"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Otwórz menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack height={'100%'} spacing={16} alignItems={'center'}>
            <NextLink href={routes.MAIN}>
              <Logo />
            </NextLink>
            <HStack as={'nav'} height={'100%'} spacing={0} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NextLink key={link.href} href={link.href} variant="topNavigation">
                  {link.title}
                </NextLink>
              ))}
            </HStack>
          </HStack>
          <Flex>
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
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NextLink key={link.href} href={link.href} variant="topNavigation">
                  {link.title}
                </NextLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
