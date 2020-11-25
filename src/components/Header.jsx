import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
            <header className={h.header}>
                <img className={h.logo}
                    src={'https://themified.com/friend-finder/images/logo.png'}/>
            </header>
    )
};

export default Header;