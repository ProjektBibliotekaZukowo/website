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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './logo';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Links = [
  { title: 'O nas', href: 'o-nas' },
  { title: 'Aktualności', href: 'aktualnosci' },
  { title: 'Kontakt', href: 'kontakt' },
];

interface INavLink {
  href: string;
}
const NavLink: React.FC<INavLink> = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={10}>
        <Flex h={28} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={16} alignItems={'center'}>
            <Logo />
            <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }} fontWeight={800}>
              {Links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex>
            <IconButton aria-label="Idź do instagram" icon={<BsInstagram />} variant="unstyled" />
            <IconButton aria-label="Idź do facebook" icon={<BsFacebook />} variant="unstyled" />
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
