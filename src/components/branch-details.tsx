import React from 'react';

type BranchProps = {
  children?: React.ReactNode;
  name?: string;
  shortDescription?: string;
  key?: number;
};

export const BranchDetails = (branchItem: BranchProps) => {
  return (
    <div className="flex border border-green-500">
      <h3>{branchItem.name}</h3>
      <p>{branchItem.shortDescription}</p>
    </div>
  );
};
