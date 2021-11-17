import * as React from 'react';
import Image from 'next/image';
import { logoFetcher } from '../lib/api';
import useSWR from 'swr';
import { LOGO_ID } from 'lib/constants';

export function Logo() {
  const { data, error } = useSWR(LOGO_ID, logoFetcher);
  if (error) {
    return <h1>No Logo</h1>;
  }
  if (!data) {
    return 'loading ...';
  }
  return <Image src={`https:${data.fields.file.url}`} width="208" height="150" />;
}
