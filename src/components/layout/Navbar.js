import React from 'react';
//import logo from '../../images/logo.png';
const Navbar = () => {
  return (
    // <nav className='navbar bg-primary'>
    //   <div className='all-center'>
    //     <img src={logo} alt='' style={{ width: '300px' }} />
    //   </div>
    // </nav>
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
            api.covid19india.org
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
