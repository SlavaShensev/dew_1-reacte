import React from 'react';
import p from "./Post.module.css";
import PostHeader from "./PostHeader/PostHeader";
import PostImg from "./PostImg/PostImg";
import PostAva from "./PostAva/PostAva";
import PostTitle from "./PostTitle/PostTitle";
import PostAuthor from "./PostAuthor/PostAuthor";
import PostText from "./PostText/PostText";
import PostInput from "./PostInput/PostInput";


const Post = () => {
    return (
        <div className={p.post}>
            <PostHeader/>
            <PostImg/>
            <PostAva/>
            <PostTitle />
            <PostAuthor/>
            <PostText/>
            <PostInput/>
        </div>
    )
};

export default Post;