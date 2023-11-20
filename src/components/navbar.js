import React, { useState } from 'react';
import Hamburger from '../components/hamburger';

const Navbar = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = (e) => {
    e.preventDefault();
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src='https://cpm.com.tr/wp-content/uploads/2021/07/cpm-logo-yazili.png' alt='Logo'/>
        </div>
        <div className='hamburger-menu'>
          <a href='#' onClick={toggleHamburger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="6" viewBox="0 0 34 6" fill="none">
                <circle cx="3" cy="3" r="3" fill="#808285"/>
                <circle cx="17" cy="3" r="3" fill="#808285"/>
                <circle cx="31" cy="3" r="3" fill="#808285"/>
            </svg>
          </a>
        </div>
      </div>
      {isHamburgerOpen && <Hamburger onClose={() => setHamburgerOpen(false)} />}
    </>
  );
};

export default Navbar;
