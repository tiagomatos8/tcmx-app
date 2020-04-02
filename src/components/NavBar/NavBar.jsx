import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='NavBar-component navbar'>
        <div className='container'>
        <div className='navbar-brand'>
            <a className='navbar-item' href={process.env.REACT_APP_PATH}>
                <img src={require('../../assets/Brazil_flag-128.png')} alt='Brazil flag' />
                <img src={require('../../assets/Wikipedia-Flags-AU-Australia-Flag.ico')} alt='Australia flag' />
            </a>
            <span className='navbar-burger burger' data-target='navbarMenuHeroA'>
            <span></span>
            <span></span>
            <span></span>
            </span>
        </div>
        <div id='navbarMenuHeroA' className='navbar-menu'>
            <div className='navbar-end'>

                <Link to='/' className='navbar-item is-size-3 is-active'>
                    Home
                </Link>

                <Link to='/projects' className='navbar-item is-size-3'>
                    Projects
                </Link>

            </div>
        </div>
        </div>
    </nav>
  );
}

export default NavBar;