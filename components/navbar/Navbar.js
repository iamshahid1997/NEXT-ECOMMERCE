import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <header>
      <nav className='flex h-12 justify-between shadow-md items-center px-4'>
        <Link href='/'>
          <p className='text-lg font-bold'>Amazon</p>
        </Link>
        <div className='flex'>
          <Link href='/cart'>
            <p className='p-2'>Cart</p>
          </Link>
          <Link href='/login'>
            <p className='p-2'>Login</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
