import React from "react";
import n from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={n.nav}>
            <nav>
                <div className={n.item}>
                    <a href='/profile'>
                        Profile
                    </a>
                </div>
                <div className={n.item}>
                    <a href='/dialogs'>
                        Messages
                    </a>
                </div>
                <div className={n.item}>
                    <a href={'#'}>
                        News
                    </a>
                </div>
                <div className={n.item}>
                    <a href={'#'}>
                        Music
                    </a>
                </div>
                <div className={n.item}>
                    <a href={'#'}>
                        Settings
                    </a>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
