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
                         addPost={props.addPost}
                         newPostText={props.newPostText}
                         updateNewPostText={props.updateNewPostText}/>
        </div>
    )
};
export default Post;