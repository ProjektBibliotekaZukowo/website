import * as React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import NextLink from 'next/link';

interface BreadcrumbProps {
  navItems: Array<{
    title: string;
    alt: string;
    href: string;
    isCurrentPage: boolean;
    isTruncated: boolean;
  }>;
}

export const ArticleBreadcrumb: React.FC<BreadcrumbProps> = ({ navItems }) => {
  return (
    <Breadcrumb>
      {navItems.map((navItem) => {
        const breadcrumbLink = navItem.isCurrentPage ? (
          <BreadcrumbLink href={navItem.href} isTruncated={navItem.isTruncated}>
            {navItem.title}
          </BreadcrumbLink>
        ) : (
          <BreadcrumbLink href={navItem.href} as={NextLink} isTruncated={navItem.isTruncated}>
            {navItem.title}
          </BreadcrumbLink>
        );
        return (
          <BreadcrumbItem key={navItem.href} isCurrentPage={navItem.isCurrentPage}>
            {breadcrumbLink}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
