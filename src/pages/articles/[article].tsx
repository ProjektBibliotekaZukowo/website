import { Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { article } = router.query;

  return <Heading as="h1">Article {article}</Heading>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { article: context.params.article },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          article: 'ocalic-od-zapomnienia-palace-w-leznie-malkowie-pepowie-i-przyjazni-we',
        },
      },
      { params: { article: 'jakas-aktualnosc' } },
      { params: { article: 'kolejna-aktualnosc' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
