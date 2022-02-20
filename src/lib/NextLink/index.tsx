import LinkFromNext from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

export const NextLink: React.FC<LinkProps> = ({ children, ...rest }) => (
  <LinkFromNext href={rest.href} passHref>
    <Link {...rest}>{children}</Link>
  </LinkFromNext>
);
