import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='bg-blue-800 text-white p-4 mb-10 flex flex-wrap items-center justify-between'>
      <div className='text-center'>
        <div className='text-3xl md:text-5xl font-bold mb-3'>
          <i className='fa fa-viruses'></i> Covid-19 Tracker
        </div>
      </div>
      <div className='flex md:hidden'>
        <button id='hamburger'>
          <img
            className='toggle block'
            src='https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png'
            width='40'
            height='40'
            alt=''
          />
          <img
            className='toggle hidden'
            src='https://img.icons8.com/fluent-systems-regular/2x/close-window.png'
            width='40'
            height='40'
            alt=''
          />
        </button>
      </div>
      <div className='toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none'>
        <Link
          className='block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none text-2xl '
          to='/'
        >
          Home
        </Link>
        <Link
          to='/countries'
          className='block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none text-2xl '
        >
          Country
        </Link>
        <Link
          to='/graphs'
          className='block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none text-2xl '
        >
          Graphs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
