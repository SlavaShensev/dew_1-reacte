import React from 'react';
import s from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
    const users = props.dialogs.map(dialog => <UserItem key={`dialog_${dialog.id}`}
                                                        name={dialog.name} id={dialog.id}/>);
    const message = props.messages.map(mes => <Message key={`message_${mes.id}`}
                                                       message={mes.message}/>);
let newAddText = React.createRef();
let addText = () => {
    let text = newAddText.current.value;
    alert(text);
};
    return (
        <div className={s.dialogs}>
            <div >
                {users}
            </div>
            <div>
                {message}
            </div>
            <div>
                <textarea ref={newAddText}/>
                <button onClick={addText} className={s.button}>
                    Push
                </button>
            </div>
        </div>
    )
};
export default Dialogs;