import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/900.css';

import React from 'react';
import Head from 'next/head';

import TopNavigation from 'components/top-navigation';
import { SITE_NAME, SITE_SEO_DESCRIPTION } from 'lib/constants';
import { AppProps } from 'next/app';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '../lib/theme';
import { Footer } from '../components/Footer/Footer';

const LibraryApp = ({ Component, pageProps }: AppProps) => {
  const { ...otherPageProps } = pageProps;

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Head>
        <meta name={SITE_NAME} content={SITE_SEO_DESCRIPTION} key="description" />
      </Head>
      <div>
        <TopNavigation />
        <Box maxWidth={'container.xl'} margin="auto" pt="100px">
          <Component {...otherPageProps} />
        </Box>
        <Footer branches={pageProps.branches} />
      </div>
    </ChakraProvider>
  );
};

export default LibraryApp;
