import React from 'react';
import n from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={n.nav}>
            <div>
                Profile
            </div>
            <div>
                Message
            </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <div>
                Setting
            </div>
        </div>
    )
};

export default NavBar;