import React from 'react';
import s from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";

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