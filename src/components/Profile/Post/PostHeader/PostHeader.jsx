import React from 'react';
import p from "./PostHeader.module.css";


const PostHeader = () => {
    return (
        <div className={p.post__header}>
            <h2>
                Recent post
            </h2>
        </div>
    )
};

export default PostHeader;