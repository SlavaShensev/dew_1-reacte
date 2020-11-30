import React from 'react';
import p from "../Profile.module.css";
import bg from "../../Static/Profile/bg1.jpg";
import ava from "../../Static/Profile/post-ava.jpg";


const Post = () => {
    return(
        <div className={p.post}>
            <div className={p.post__title}>
                <h2>
                    Recent post
                </h2>
            </div>
            <div className={p.post__img}>
                <img className={p.img} src={bg} alt={'#'}/>
            </div>
            <div className={p.post__ava}>
                <img className={p.ava} src={ava} alt={'#'}/>
            </div>
            <div className={p.title__text}>
                <h3>
                    You think water moves fast?
                </h3>
            </div>
            <div className={p.author}>
                <p>
                    by admin
                </p>
            </div>
            <div className={p.post__text}>
                <p>
                    You should see ice. It moves like it has a
                    mind. Like it knows it killed the world once
                    and got a taste for murder. After the
                    avalanche, it took us a week to climb out....
                </p>
            </div>
        </div>
    )
};

export default Post;