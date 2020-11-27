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
    let dialogsData = [
        {id: 1, name: 'UserGreen'},
        {id: 2, name: 'UserYellow'},
        {id: 3, name: 'UserBlack'},
        {id: 4, name: 'UserRed'},
        {id: 5, name: 'UserWhite'},
        {id: 6, name: 'UserPink'},
        {id: 7, name: 'UserGrey'},
    ];



    let messagesData = [
        {id: 1, message: 'Greet'},
        {id: 2, message: 'Lorem ipsum dolor.'},
        {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur.'},
        {id: 4, message: 'Lorem ipsum dolor.'},
        {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur.'},
        {id: 6, message: 'Lorem ipsum dolor sit amet, consectetur.'},
        {id: 7, message: 'Lorem ipsum dolor sit amet, consectetur.'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
                <Message message={messagesData[6].message}/>
            </div>
        </div>
    );
};

export default Dialogs;