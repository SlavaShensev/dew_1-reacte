import React from 'react';
import p from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";
import PostContent from "./PostContent/PoctContent";

const postsText = postTextData
    .map(text => <PostContent text={text.text}/>);
const Post = () => {
    return (
        <div>
            <PostInfo/>
            <PostContent text={postsText}/>
        </div>
    )
};
export default Post;