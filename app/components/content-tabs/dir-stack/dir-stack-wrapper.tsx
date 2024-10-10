import React from 'react';
import { WithChildren } from '@/app/types/globl';

const DirStackWrapper = ({ children }: Readonly<WithChildren>) => {
  return <div className="grid grid-cols-3 h-full">{children}</div>;
};

export default DirStackWrapper;
