import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <div>
                <span>
                    like{props.likeCount}
                </span>
            </div>
        </div>

    )
};


export default Post;