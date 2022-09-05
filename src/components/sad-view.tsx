import React from 'react';
import { Link } from 'react-router-dom';

function SadView() {
  return (
    <>
      <div className='bg-white border-2 border-gray-200 flex flex-col items-center gap-4 p-4'>
        <h1 className='text-4xl'>User not found</h1>
        <p className='text-gray-500 text-2xl'>This user could not be found, please try a different user</p>
        <Link className='text-blue-500 underline text-2xl' to='/users'>Back to users</Link>

      </div>
    </>
  );
}

export default SadView;