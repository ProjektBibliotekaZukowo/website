import NextLink from 'next/link';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './logo';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { routes, links } from '../lib/constants';

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        px={{ base: 4, lg: 10 }}
        boxShadow={'0px 10px 20px #0000001A'}
        fontSize="xl"
        as="header"
        w="100%"
        position="fixed"
        zIndex={1}>
        <Flex
          h={'100px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxWidth={'container.xl'}
          margin="auto">
          <IconButton
            variant="unstyled"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Otwórz menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack height={'100%'} spacing={{ base: 8, lg: 16 }} alignItems={'center'}>
            <Link as={NextLink} href={routes.MAIN}>
              <Logo />
            </Link>
            <HStack as={'nav'} height={'100%'} spacing={0} display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <Link as={NextLink} key={link.href} href={link.href} variant="topNavigation">
                  {link.title}
                </Link>
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
              {links.map((link) => (
                <Link as={NextLink} key={link.href} href={link.href} variant="topNavigation">
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
