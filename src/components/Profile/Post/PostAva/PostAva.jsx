import React from 'react';
import p from "../../Profile.module.css";
import ava from "../../../Static/Profile/post-ava.jpg";


const PostAva = () => {
    return (
        <div className={p.post__ava}>
            <img className={p.ava} src={ava} alt={'#'}/>
        </div>
    )
};

export default PostAva;