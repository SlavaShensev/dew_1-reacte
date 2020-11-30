import React from 'react';
import p from "../../Profile.module.css";


const PostInput = () => {
    return (
        <div className={p.post__input}>
            <input className={p.input} type={'text'}/>
        </div>
    )
};

export default PostInput;