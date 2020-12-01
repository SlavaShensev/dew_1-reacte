import React from 'react';
import p from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";
import PostContent from "./PostContent/PoctContent";


const Post = () => {
    return (
        <div>
            <PostInfo/>
            <PostContent/>
        </div>
    )
};

export default Post;