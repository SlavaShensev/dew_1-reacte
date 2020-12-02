import React from 'react';
import s from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const users = props.dialogs.map(dialog => <UserItem key={`dialog_${dialog.id}`} name={dialog.name} id={dialog.id}/>);
    const message = props.messages.map(mes => <Message  key={`message_${mes.id}`} message={mes.message}/>);

    return (
        <div>
            <div>
                {users}
            </div>
            <div>
                {message}
            </div>
        </div>
    )
};
export default Dialogs;