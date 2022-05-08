import { links } from '../../lib/constants';
import { NextLink } from '../../lib/NextLink';
import { Box, ListItem, Stack, UnorderedList, VStack } from '@chakra-ui/react';

export const FooterNavigation = () => {
  return (
    <Box mt="52px">
      <UnorderedList styleType="none" margin="10px 0">
        <Stack>
          {links.map((link) => (
            <ListItem key={link.href + link.title}>
              <NextLink href={link.href} variant="footerNavigation">
                {link.title}
              </NextLink>
            </ListItem>
          ))}
        </Stack>
      </UnorderedList>
    </Box>
  );
};
