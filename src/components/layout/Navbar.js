import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName('toggle');
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle('hidden');
    }
  };

  return (
    <nav class='flex flex-wrap items-center justify-between p-5 text-white bg-blue-800 mb-5'>
      <div className='text-3xl md:text-5xl font-bold mb-3'>
        <i className='fa fa-viruses'></i> Covid-19 Tracker
      </div>
      <div className='flex md:hidden'>
        <button id='hamburger' onClick={toggleMenu}>
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
      <div className='toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2  border-blue-900 md:border-none '>
        <Link
          to='/'
          className='block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none text-2xl'
        >
          Home
        </Link>
        <Link
          to='/countries'
          className='block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none text-2xl'
        >
          Country
        </Link>
        <Link
          to='/graphs'
          className='block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none text-2xl'
        >
          Graphs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
