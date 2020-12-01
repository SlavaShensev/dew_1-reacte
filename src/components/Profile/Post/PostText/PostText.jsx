import React from 'react';
import p from "../../Profile.module.css";
import LikeCounter from "./likeCounter/likeCounter";


const PostText = (props) => {
    return (
        <div className={p.post__text}>
            <p>
                {props.text}
            </p>
            <LikeCounter num='16'/>
        </div>
    )
};

export default PostText;