import React from 'react';
import h from './Header.module.css';
import facebook from '../Static/facebook.png';
import twitter from '../Static/twitter.png';
import all from '../Static/all.png';

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.logo}>
                <img className={h.logo_item} src={facebook}/>
                <img className={h.logo_item} src={twitter}/>
                <img className={h.logo_item} src={all}/>
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