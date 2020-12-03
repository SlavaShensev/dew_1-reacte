import React from 'react';
import p from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";
import PostContent from "./PostContent/PoctContent";

const Post = (props) => {
    const postsText = props.text.map(({text}) => text);
    return (
        <div className={p.postMain}>
            <PostInfo/>
            <PostContent text={postsText}/>

        </div>
    )
};
export default Post;