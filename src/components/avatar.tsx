import React from 'react';
import { getInitialsFromFullName } from '../utils';

interface AvatarProps {
  src: string | undefined;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASS = {
  sm: 'w-16 h-16',
  md: 'w-20 h-20',
  lg: 'w-36 h-36'

} as const;


const FONT_SIZE_CLASS = {
  sm: 'text-xl',
  md: 'text-4xl',
  lg: 'text-6xl',
} as const;

function Avatar({ src, name, size = 'md' }: AvatarProps) {
  const initials = getInitialsFromFullName(name);

  const bg = src ? 'bg-blue-50' : 'bg-green-400';

  return (
    <div className={`flex justify-center items-center overflow-hidden rounded-full ${SIZE_CLASS[size]} mr-4 border-blue-200 border-2 ${bg}`}>
      {src ? <img alt='' src={src} className='w-full' /> : <span className={`text-white ${FONT_SIZE_CLASS[size]}`} >{initials}</span>}
    </div>

  );
}

export default Avatar;