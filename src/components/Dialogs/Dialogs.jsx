import React from 'react';
import s from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";


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