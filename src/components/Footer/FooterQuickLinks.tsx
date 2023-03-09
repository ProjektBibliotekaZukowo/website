import { Box, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const qickLinks = [
  { title: 'Polityka prywatności', href: '/' },
  { title: 'Deklaracja dostępności', href: '/' },
  { title: 'Klauzula dot. danych osobowych', href: '/' },
  { title: 'Polityka ochrony danych', href: '/' },
  { title: 'Regulamin', href: '/' },
  { title: 'link 6 lorem ipsum', href: '/' },
  { title: 'link 7 lorem ipsum', href: '/' },
  { title: 'link 8 lorem ipsum', href: '/' },
  { title: 'link 9 lorem ipsum', href: '/' },
  { title: 'link 10 lorem ipsum', href: '/' },
  { title: 'link 11 lorem ipsum', href: '/' },
];

export const FooterQuickLinks = () => {
  return (
    <>
      <Box mt="52px">
        <UnorderedList styleType="none" margin="10px 0">
          <Stack>
            {qickLinks.map((link, index) => {
              if (index < 5) {
                return (
                  <ListItem key={link.href + link.title}>
                    <Link href={link.href}>
                      {/* <NextLink href={link.href} variant="footerQuickLinks"> */}
                      {link.title}
                    </Link>
                  </ListItem>
                );
              }
            })}
          </Stack>
        </UnorderedList>
      </Box>
      <Box mt="52px">
        <UnorderedList styleType="none" margin="10px 0">
          <Stack>
            {qickLinks.map((link, index) => {
              if (index > 4 && index < 10) {
                return (
                  <ListItem key={link.href + link.title}>
                    <Link href={link.href}>
                      {/* <NextLink href={link.href} variant="footerQuickLinks"> */}
                      {link.title}
                    </Link>
                  </ListItem>
                );
              }
            })}
          </Stack>
        </UnorderedList>
      </Box>
    </>
  );
};
