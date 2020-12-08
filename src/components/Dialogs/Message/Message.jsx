import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div>
                <p>
                    {props.message}
                </p>
            </div>
        </div>
    )
};

export default Message;