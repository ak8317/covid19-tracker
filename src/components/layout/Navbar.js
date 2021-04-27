import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <div className='all-center'>
        <h1 className='title'>
          <i className='fas fa-viruses'></i> Covid-19 Tracker
        </h1>
        <p>
          API by
          <a
            href='https://api.covid19india.org/'
            target='_blank'
            rel='noreferrer'
            style={{ color: 'grey' }}
          >
            covid19india.org
          </a>
        </p>
      </div>
      <ul>
        <li>
          <h3>
            <Link to='/'>Home</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to='/graphs'>Graphs</Link>
          </h3>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
