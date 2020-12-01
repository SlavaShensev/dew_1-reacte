import React from 'react';
import {NavLink} from 'react-router-dom';
import n from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={n.nav}>
            <div className={n.item}>
                <NavLink to={'/profile'} activeClassName={n.active}>
                    Profile
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={'/dialogs'} activeClassName={n.active}>
                    Message
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={'/news'} activeClassName={n.active}>
                    News
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={'/music'} activeClassName={n.active}>
                    Music
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={'/settings'} activeClassName={n.active}>
                    Setting
                </NavLink>
            </div>
        </div>
    )
};

export default NavBar;