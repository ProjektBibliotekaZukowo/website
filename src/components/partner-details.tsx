import React from 'react';
import Image from 'next/image';

type PartnerDetailsProps = {
  children?: React.ReactNode;
  key?: number;
  logo?: {
    url?: string;
  };
};

export const PartnerDetails = (partnerDetails: PartnerDetailsProps) => {
  return (
    <div className="flex max-w-254 items-center">
      <div className="flex imageContainer">
        <Image src={partnerDetails.logo.url} layout="fill" className="image" />
      </div>
    </div>
  );
};
