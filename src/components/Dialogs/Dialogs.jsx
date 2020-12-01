import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const UserItem = (props) => {
    return (
        <div className={s.user__item}>
            <NavLink to={'/dialogs/' + props.id} className={s.users__link + ' ' + s.active}>
                <p>
                    {props.name}
                </p>
            </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message__item}>
            <p>
                {props.message}
            </p>
        </div>
    )
};

let dialogsData = [
    {id: 1, name: 'Slava'},
    {id: 2, name: 'Vova'},
    {id: 3, name: 'Gena'},
    {id: 4, name: 'Olya'},
    {id: 5, name: 'Nikolay'},
];

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Bay!'},
    {id: 4, message: 'Bay!'},
    {id: 5, message: 'Bay!'},
];

let users = dialogsData
    .map(dialog => <UserItem name={dialog.name} id={dialog.id}/>);

let message = messagesData
    .map(mes => <Message message={mes.message}/>);

let Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {users}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
};

export default Dialogs;