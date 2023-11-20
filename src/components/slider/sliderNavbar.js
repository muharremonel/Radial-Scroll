import React, { useState } from 'react';
import Hamburger from '../hamburger';
import Search from '../search';
import { SearchIcon, TrIcon } from '../images';

const SliderNavbar = () => {
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleHamburger = (e) => {
        e.preventDefault();
        setHamburgerOpen(!isHamburgerOpen);
    };
    const toggleSearch = (e) => {
        e.preventDefault();
        setSearchOpen(!isSearchOpen);
    };

  return (
    <>
      <header className="d-flex align-items-center justify-content-between slider-navbar">
        <div className='logo'>
            <img src='https://demo.anibalbilisim.com/gorsel/2.png' alt='Logo'/>
        </div>
        <div className="items-center slider-none">
            <ul className='d-flex gap-5 slider-nav' style={{listStyle: 'none', padding: '0', margin: '0'}}>
              <li>Çözümler</li>
              <li>Kurumsal</li>
              <li>Medya</li>
              <li>Faaliyetler</li>
              <li>Bağlantılar</li>
            </ul>
        </div>

        <div className="slider-none">
          <div className='d-flex align-items-center gap-5'>
            <a href=''  onClick={toggleSearch}>
                  <SearchIcon/>
            </a>
            <div>
                <span className='color-white'>
                  <TrIcon/>
                </span>
            </div>
          </div>
        </div>
        <div className='slider-hamburger'>
          <a href='#' onClick={toggleHamburger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="6" viewBox="0 0 34 6" fill="none">
                <circle cx="3" cy="3" r="3" fill="#808285"/>
                <circle cx="17" cy="3" r="3" fill="#808285"/>
                <circle cx="31" cy="3" r="3" fill="#808285"/>
            </svg>
          </a>
        </div>

        {isHamburgerOpen && <Hamburger onClose={() => setHamburgerOpen(false)} />}
        {isSearchOpen && <Search onClose={() => setSearchOpen(false)} />}
      </header>
    </>
  );
};

export default SliderNavbar;
