import React from 'react';
import s from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";

const dialogsData = [
    {id: 1, name: 'Slava'},
    {id: 2, name: 'Vova'},
    {id: 3, name: 'Gena'},
    {id: 4, name: 'Olya'},
    {id: 5, name: 'Nikolay'},
];
const messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Bay!'},
    {id: 4, message: 'Bay!'},
    {id: 5, message: 'Bay!'},
];

const users = dialogsData
    .map(dialog => <UserItem name={dialog.name} id={dialog.id}/>);

const message = messagesData
    .map(mes => <Message message={mes.message}/>);

const Dialogs = () => {
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