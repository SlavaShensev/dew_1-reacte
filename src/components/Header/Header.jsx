import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
            <header className={h.header}>
                <img className={h.logo}
                     src={'https://www.flaticon.com/svg/static/icons/svg/732/732245.svg'} alt=""/>
            </header>
    )
};

export default Header;