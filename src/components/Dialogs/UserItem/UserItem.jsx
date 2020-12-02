import React from 'react';
import s from './UserItem.module.css';
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={s.users__link + ' ' + s.active}>
                <p>
                    {props.name}
                </p>
            </NavLink>
        </div>
    )
};

export default UserItem;