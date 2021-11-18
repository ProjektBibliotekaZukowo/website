import * as React from 'react';
import Image from 'next/image';
import { logoFetcher } from '../lib/api';
import { ASSETS } from 'lib/constants';
import { useEffect, useState } from 'react';
import { FetchAssetQuery } from 'generated/types';

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
  });
  if (result.loading) {
    return <>loading ...</>;
  }

  return <Image src={`${result.data.asset.url}`} width="208" height="150" />;
}
