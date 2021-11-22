import React from 'react';

type BranchProps = {
  children?: React.ReactNode;
  name?: string;
  shortDescription?: string;
  key?: number;
};

export const BranchDetails = (branchItem: BranchProps) => {
  return (
    <div className="flex">
      <h3>{branchItem.name}</h3>
      <p>{branchItem.shortDescription}</p>
    </div>
  );
};
