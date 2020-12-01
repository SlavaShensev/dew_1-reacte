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
            <PostText text={'You should see ice. It moves like it has a\n' +
            '                mind. Like it knows it killed the world once\n' +
            '                and got a taste for murder. After the\n' +
            '                avalanche, it took us a week to climb out....'}/>
            <PostInput/>
        </div>
    )
};

export default Post;