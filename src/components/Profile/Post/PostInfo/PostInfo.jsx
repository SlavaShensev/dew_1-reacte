import React from 'react';
import s from './PostInfo.module.css';
import bg from '../../../Static/Profile/bg1.jpg';


const PostInfo = () => {
    return (
        <div>
            <div>
                <h2>
                    Recent post
                </h2>
            </div>
            <div>
                <img src={bg}/>
            </div>
        </div>
    )
};

export default PostInfo;