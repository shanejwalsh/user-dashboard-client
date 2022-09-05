import React from 'react';
import { StackProps } from '../../interfaces';

export function VStack({ children, gap = "gap-2" }: StackProps) {
  return (
    <div className={`flex flex-col ${gap}`}>
      {children}
    </div>
  );
}