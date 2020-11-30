import React from 'react';
import p from "./PostAuthor.module.css";


const PostAuthor = () => {
    return (
        <div className={p.post__author}>
            <p>
                by admin
            </p>
        </div>
    )
};

export default PostAuthor;