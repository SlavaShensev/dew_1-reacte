import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>Pushkin </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Shevchenko</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Lomonosov</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Kopernik</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>Enshteyn</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}>Tomas Edison</NavLink>
                </div>
            </div>

            <div className="messages">
                <div className="message">Hello!</div>
                <div className="message">Are you programmer?</div>
                <div className="message">Can you set up windows for my computer, please?</div>
            </div>


        </div>
    )
};


export default Dialogs;