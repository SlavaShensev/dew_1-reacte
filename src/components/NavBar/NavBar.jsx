import React from 'react';
import n from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={n.nav}>
            <div className={n.profile}>
                <a href={'/profile'}>Profile</a>
            </div>
            <div className={n.message}>
                <a href={'/dialogs'}>Message</a>
            </div>
            <div className={n.news}>
                <a href={'/news'}>News</a>
            </div>
            <div className={n.music}>
                <a href={'/music'}>Music</a>
            </div>
            <div className={n.setting}>
                <a href={'/settings'}>Setting</a>
            </div>
        </div>
    )
};

export default NavBar;