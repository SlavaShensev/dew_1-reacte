import React from 'react';
import p from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";
import PostContent from "./PostContent/PoctContent";

const Post = (props) => {
    const postsText = props.text.map(el => el.text);
    return (
        <div className={p.postMain}>
            <PostInfo/>
            <PostContent text={postsText} addPost={props.addPost}/>
        </div>
    )
};
export default Post;