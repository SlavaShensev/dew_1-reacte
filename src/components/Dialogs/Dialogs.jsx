import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.item}>
                <div className={s.dialog + ' ' + s.active}>
                    Slava
                </div>
                <div className={s.dialog}>
                    Vova
                </div>
                <div className={s.dialog}>
                    Gena
                </div>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Nikolay
                </div>
            </div>
            <div className={s.message}>
                <div>
                    Hello
                </div>
                <div>
                    You are you
                </div>
            </div>
        </div>
    )
};

export default Dialogs;