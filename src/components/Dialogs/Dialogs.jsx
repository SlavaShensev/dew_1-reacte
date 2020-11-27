import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
};

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'UserGreen'},
        {id: 2, name: 'UserYellow'},
        {id: 3, name: 'UserBlack'},
        {id: 4, name: 'UserRed'},
        {id: 5, name: 'UserWhite'},
        {id: 6, name: 'UserPink'},
        {id: 7, name: 'UserGrey'},
    ];

    let messages = [
        {id: 1, message: 'Greet'},
        {id: 2, message: 'Lorem ipsum dolor.'},
        {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur.'},
        {id: 4, message: 'Lorem ipsum dolor.'},
        {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur.'},
        {id: 6, message: 'Lorem ipsum dolor sit amet, consectetur.'},
        {id: 7, message: 'Lorem ipsum dolor sit amet, consectetur.'},
    ];

    let dialogsElements = dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });

    let messagesElements = messages.map((m) => {
        return <Message message={m.message}/>
    });
    console.log(dialogsElements)
    console.log(messagesElements)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;