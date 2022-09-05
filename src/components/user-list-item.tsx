import React from 'react';
import { User } from '../interfaces';
import { Link } from "react-router-dom";
import Avatar from './avatar';

function UserListItem({ user }: { user: User; }) {

  return (
    <article className='bg-slate-50 rounded-md w-full md:w-72 shadow-md border-black border-1 hover:scale-105 ease-in-out duration-300'>
      <Link className='w-full h-full flex p-4 ' to={`/users/${user.id}`}>
        <Avatar src={user?.avatar} name={user.fullName} size='sm' />
        <div className='flex flex-col justify-center'>
          <p className="flex content-center text-xl font-semibold tex">
            {user.fullName}
          </p>
          <p className="flex content-center text-gray-600">
            {user.company.name}
          </p>
        </div>
      </Link>
    </article >
  );
}

export default UserListItem;