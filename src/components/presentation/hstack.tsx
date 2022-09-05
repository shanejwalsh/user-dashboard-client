import React from 'react';
import { StackProps } from '../../interfaces';

export function HStack({ children, gap }: StackProps) {
  return (
    <div className={`flex ${gap} items-stretch`}>
      {children}
    </div>
  );
}
