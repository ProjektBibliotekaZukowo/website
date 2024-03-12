import { Branch } from 'generated/types';
import React from 'react';

export const BranchDetails = (branchItem: Branch) => {
  return (
    <div className="flex">
      <h3>{branchItem.name}</h3>
      <p>{branchItem.shortDescription}</p>
    </div>
  );
};
