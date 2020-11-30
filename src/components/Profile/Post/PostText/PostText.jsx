import React from 'react';
import p from "../../Profile.module.css";
import LikeCounter from "./likeCounter/likeCounter";


const PostText = (props) => {
    return (
        <div className={p.post__text}>
            <p>
                {/*You should see ice. It moves like it has a*/}
                {/*mind. Like it knows it killed the world once*/}
                {/*and got a taste for murder. After the*/}
                {/*avalanche, it took us a week to climb out....*/}

            </p>
            <LikeCounter num='16'/>
        </div>
    )
};

export default PostText;