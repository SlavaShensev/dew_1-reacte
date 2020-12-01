import React from 'react';
import h from './Header.module.css';
import logo from '../Static/Header/logo.png';

const Header = () => {
    return (
            <header className={h.header}>
                <a href={'https://www.google.com/'} className={h.link} target={'_blank'}>
                    <img className={h.logo}
                         src={logo} alt=""/>
                </a>
            </header>
    )
};

export default Header;