import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './logo';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { routes } from '../lib/constants';

const Links = [
  { title: 'O nas', href: routes.O_NAS },
  { title: 'Aktualności', href: routes.AKTUALNOSCI },
  { title: 'Katalog online', href: routes.KATALOG_ONLINE },
  { title: 'Kontakt', href: routes.KONTAKT },
];

interface INavLink {
  href: string;
}

const NavLink: React.FC<INavLink> = ({ children, href }) => (
  <NextLink href={href} passHref>
    <Link href={href} variant="topNavigation">
      {children}
    </Link>
  </NextLink>
);

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
            <Link href={routes.MAIN}>
              <Logo />
            </Link>
            <HStack as={'nav'} height={'100%'} spacing={0} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.title}
                </NavLink>
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
                <NavLink key={link.href} href={link.href}>
                  {link.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
