import React from 'react';
import p from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";
import PostContent from "./PostContent/PoctContent";

const Post = (props) => {
    const postsText = props.postTextData.map(el => el.text);
    return (
        <div className={p.postMain}>
            <PostInfo/>
            <PostContent text={postsText}
                         newPostText={props.newPostText}
                         dispatch={props.dispatch}/>
        </div>
    )
};
export default Post;