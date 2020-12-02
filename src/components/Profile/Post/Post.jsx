import React from 'react';
import p from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";
import PostContent from "./PostContent/PoctContent";

const postTextData = [
    {id:1, text: 'You should see ice. It moves like it has'},
    {id:2, text: 'You should see ice. It moves like it has a mind.'},
    {id: 3, text: '  avalanche, it took us a week to climb out'},
];

const postsText = postTextData
    .map(text => <PostContent text={text.text}/>);

const Post = () => {
    return (
        <div>
            <PostInfo/>
            <PostContent text={postsText} />
        </div>
    )
};

export default Post;