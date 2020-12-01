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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
               <UserItem name={dialogsData[0].name} id={dialogsData[0].id}/>
               <UserItem name={dialogsData[1].name} id={dialogsData[1].id}/>
               <UserItem name={dialogsData[2].name} id={dialogsData[2].id}/>
               <UserItem name={dialogsData[3].name} id={dialogsData[3].id}/>
               <UserItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
};

export default Dialogs;