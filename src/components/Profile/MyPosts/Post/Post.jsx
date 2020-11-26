import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/katara-avatar-the-last-airbender-1590006359.png?crop=0.997xw:0.648xh;0.00340xw,0.0774xh&resize=480:*'}/>
            <div>
                <span>
                    like{props.likeCount}
                </span>
            </div>
        </div>

    )
};


export default Post;