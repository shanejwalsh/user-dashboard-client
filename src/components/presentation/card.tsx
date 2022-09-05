import React from 'react';
import { ChildrenProps } from '../../interfaces';

export function Card({ children }: ChildrenProps) {
  return (
    <article className='bg-white p-4 border-gray-300 border-2 rounded-md flex items-start shadow-sm flex-1 items-start'>
      {children}
    </article>
  );
}
