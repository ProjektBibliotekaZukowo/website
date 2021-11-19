import React from 'react';
import Head from 'next/head';

import 'styles/index.css';
import { PreviewBanner } from 'components/preview-banner';
import { TopNavigation } from 'components/top-navigation';
import { SITE_NAME, SITE_SEO_DESCRIPTION } from 'lib/constants';
import { AppProps } from 'next/app';

function LibraryApp({ Component, pageProps }: AppProps) {
  const { ...otherPageProps } = pageProps;

  return (
    <div className="bg-accent0-0 max-w-site mx-auto">
      <Head>
        <meta name={SITE_NAME} content={SITE_SEO_DESCRIPTION} key="description" />
      </Head>
      <PreviewBanner />
      <div className="relative max-w-site">
        <TopNavigation />
        <Component {...otherPageProps} />
      </div>
    </div>
  );
}

export default LibraryApp;
