import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {




    return (
        <div>
            <div>
                New post
            </div>
            <div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={'item'}>
                    <Post likeCount ='12'/>
                    <Post likeCount ='1'/>
                </div>
            </div>
        </div>

    )
};


export default MyPosts;