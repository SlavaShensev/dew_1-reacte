import React from 'react';
import h from './Header.module.css';
import logo from '../Static/facebook.png';

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.logo}>
                <img className={h.logo_item} src={logo}/>
            </div>
            <div className={h.title}>
                <h1>
                    Closer Than We Think
                </h1>
            </div>
            <div>
                <input type={'text'} className={h.input} placeholder={'finder'}/>
                <button className={h.button}>
                    Search
                </button>
            </div>
        </div>
    )
};

export default Header;