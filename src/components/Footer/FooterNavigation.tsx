import { links } from '../../lib/constants';
import NextLink from 'next/link';
import { Box, ListItem, Stack, UnorderedList, Link } from '@chakra-ui/react';

export const FooterNavigation = () => {
  return (
    <Box mt="52px">
      <UnorderedList styleType="none" margin="10px 0">
        <Stack>
          {links.map((link) => (
            <ListItem key={link.href + link.title}>
              <Link as={NextLink} href={link.href} variant="footerNavigation">
                {link.title}
              </Link>
            </ListItem>
          ))}
        </Stack>
      </UnorderedList>
    </Box>
  );
};
