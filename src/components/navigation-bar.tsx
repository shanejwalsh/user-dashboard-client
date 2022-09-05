import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className='bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-6 text-xl font-bold'><Link to={'/users'}>Users</Link></div>
    </nav>
  );
}

export default NavBar;