import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Cards} from './Cards';
import AnchorLink from 'react-anchor-link-smooth-scroll';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AIX
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
  
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>

            <li className='nav-item'>
              <AnchorLink href='#sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
