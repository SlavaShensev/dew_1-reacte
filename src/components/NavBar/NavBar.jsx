import React from 'react';
import n from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={n.nav}>
            <div className={n.profile}>
                Profile
            </div>
            <div className={n.message}>
                Message
            </div>
            <div className={n.news}>
                News
            </div>
            <div className={n.music}>
                Music
            </div>
            <div className={n.setting}>
                Setting
            </div>
        </div>
    )
};

export default NavBar;