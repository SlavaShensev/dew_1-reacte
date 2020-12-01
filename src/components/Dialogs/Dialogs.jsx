import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={s.user__item}>
                    <NavLink to={'#'} className={s.users__link + ' ' + s.active}>
                        <p>
                            Slava
                        </p>
                    </NavLink>
                </div>
                <div className={s.user__item}>
                    <NavLink to={'#'} className={s.users__link}>
                        <p>
                            Vova
                        </p>
                    </NavLink>
                </div>
                <div className={s.user__item}>
                    <NavLink to={'#'} className={s.users__link}>
                        <p>
                            Gena
                        </p>
                    </NavLink>
                </div>
                <div className={s.user__item}>
                    <NavLink to={'#'} className={s.users__link}>
                        <p>
                            Olya
                        </p>
                    </NavLink>
                </div>
                <div className={s.user__item}>
                    <NavLink to={'#'} className={s.users__link}>
                        <p>
                            Nikolay
                        </p>
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message__item}>
                    <p>
                        Hello
                    </p>
                </div>
                <div className={s.message__item}>
                    <p>
                        You are you
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;