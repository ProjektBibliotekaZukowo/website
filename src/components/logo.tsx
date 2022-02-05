import * as React from 'react';
import { logoFetcher } from '../lib/api';
import { ASSETS } from 'lib/constants';
import { useEffect, useState } from 'react';
import { FetchAssetQuery } from 'generated/types';
import { ChakraNextImage } from './ChakraNextImage';

type LogoState = { data: FetchAssetQuery; loading: boolean };
export function Logo() {
  const [result, setResult] = useState<LogoState>({
    data: undefined,
    loading: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await logoFetcher(ASSETS.logoId);
      setResult({ ...result });
    };

    fetchData();
  }, []);
  if (result.loading) {
    return <>loading ...</>;
  }

  return <ChakraNextImage src={`${result.data.asset.url}`} width="199" height="42" />;
}
