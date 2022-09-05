import React from 'react';
import { ChildrenProps } from '../../interfaces';




export function Heading({ children }: ChildrenProps) {
  return (
    <h1 className='text-4xl'>{children}</h1>
  );
}
