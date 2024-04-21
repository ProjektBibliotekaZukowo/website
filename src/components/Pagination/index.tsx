import React from 'react';
import { Button, Center, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Pagination = ({ currentPage, totalPages }) => {
  const firstPage = 1;
  const lastPage = totalPages;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Center my={50} width="100%">
      <HStack spacing={4}>
        {currentPage === firstPage ? (
          <>
            <Button isDisabled={currentPage === firstPage} aria-label="Przejdź do pierwszej strony">
              « Pierwsza
            </Button>

            <Button
              isDisabled={currentPage === firstPage}
              aria-label="Przejdź do poprzedniej strony">
              ‹ Poprzednia
            </Button>
          </>
        ) : (
          <>
            <Button
              as={NextLink}
              href={`/aktualnosci`}
              isDisabled={currentPage === firstPage}
              aria-label="Przejdź do pierwszej strony">
              « Pierwsza
            </Button>
            <Button
              as={NextLink}
              href={`/aktualnosci/strona/${currentPage - 1}`}
              isDisabled={currentPage === firstPage}
              aria-label="Przejdź do poprzedniej strony">
              ‹ Poprzednia
            </Button>
          </>
        )}
        {pageNumbers.map((page) => (
          <Button
            as={NextLink}
            href={`/aktualnosci/strona/${page}`}
            key={page}
            colorScheme={currentPage === page ? 'blue' : 'gray'}
            aria-current={currentPage === page ? 'page' : undefined}>
            {page}
          </Button>
        ))}
        {currentPage === lastPage ? (
          <>
            <Button isDisabled={currentPage === lastPage} aria-label="Przejdź do następnej strony">
              Następna ›
            </Button>
            <Button isDisabled={currentPage === lastPage} aria-label="Przejdź do ostatniej strony">
              Ostatnia »
            </Button>
          </>
        ) : (
          <>
            <Button
              as={NextLink}
              href={`/aktualnosci/strona/${currentPage + 1}`}
              isDisabled={currentPage === lastPage}
              aria-label="Przejdź do następnej strony">
              Następna ›
            </Button>
            <Button
              as={NextLink}
              href={`/aktualnosci/strona/${lastPage}`}
              isDisabled={currentPage === lastPage}
              aria-label="Przejdź do ostatniej strony">
              Ostatnia »
            </Button>
          </>
        )}
      </HStack>
    </Center>
  );
};

export default Pagination;
