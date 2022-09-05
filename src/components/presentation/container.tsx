import React from 'react';
import { ChildrenProps } from '../../interfaces';

export function Container({ children }: ChildrenProps) {
  return (
    <div className='min-h-screen p-8 bg-sky-100/60'>{children}</div>
  );
}
