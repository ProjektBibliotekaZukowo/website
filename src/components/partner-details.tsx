import React from 'react';
import Image from "next/legacy/image";

type PartnerDetailsProps = {
  children?: React.ReactNode;
  key?: number;
  logo?: {
    url?: string;
    description?: string;
  };
};

export const PartnerDetails = (partnerDetails: PartnerDetailsProps) => {
  return (
    <div className="flex max-w-254 items-center">
      <div className="flex imageContainer">
        <Image
          src={partnerDetails.logo.url}
          layout="fill"
          className="image"
          alt={partnerDetails.logo.description}
        />
      </div>
    </div>
  );
};
