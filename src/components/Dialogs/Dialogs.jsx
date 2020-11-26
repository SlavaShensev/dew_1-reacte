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

const Massage = (props) => {
    return (
        <div className={s.dialog}>
            {props.massage}
        </div>
    )
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Shevchenko'} id={'1'}/>
                <DialogItem name={'Lomonosov'} id={'2'}/>
                <DialogItem name={'Lomonosov'} id={'3'}/>
                <DialogItem name={'Kopernik'} id={'4'}/>
                <DialogItem name={'Enshteyn'} id={'5'}/>
                <DialogItem name={'Tomas Edison'} id={'6'}/>
                <DialogItem name={'Goof'} id={'7'}/>
            </div>

            <div className="messages">
                <Massage massage={'Hello!'}/>
                <Massage massage={'Are you programmer?'}/>
                <Massage massage={'Can you set up windows for my computer, please?'}/>
            </div>
        </div>
    )
};


export default Dialogs;