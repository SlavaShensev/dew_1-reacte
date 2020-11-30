import React from 'react';
import h from './Header.module.css';
import logo from '../Static/Header/logo.png';

const Header = () => {
    return (
            <header className={h.header}>
                <a href={'#'} className={h.link}>
                    <img className={h.logo}
                         src={logo} alt=""/>
                </a>
            </header>
    )
};

export default Header;