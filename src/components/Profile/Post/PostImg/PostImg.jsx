import React from 'react';
import p from "./PostImg.module.css";
import bg from "../../../Static/Profile/bg1.jpg";


const PostImg = () => {
    return (
        <div className={p.post__img}>
            <img className={p.img} src={bg} alt={'#'}/>
        </div>
    )
};

export default PostImg;