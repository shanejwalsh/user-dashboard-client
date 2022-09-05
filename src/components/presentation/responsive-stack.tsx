import React from 'react';
import { StackProps } from '../../interfaces';

export function ResponsiveStack({ children, gap = 'gap-2' }: StackProps) {
  return (
    <div className={`flex flex-col md:flex-row ${gap}`}>
      {children}
    </div>
  );
}
