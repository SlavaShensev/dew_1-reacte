import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={'item'}>
                    post 2
                </div>
            </div>
            <Post/>
        </div>

    )
};


export default MyPosts;