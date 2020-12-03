import React from 'react';
import s from './PostContent.module.css';
import ava from '../../../Static/Profile/post-ava.jpg';

const PostContent = (props) => {
   const renderPost= (inputPost) => (<p>{inputPost}</p>);
    return (
        <div>
            <div>
                <img src={ava}/>
            </div>
            <div>
                <h2>
                    You think water moves fast?
                </h2>
            </div>
            <div>
                <h4>
                    admin
                </h4>
            </div>
            <div>
                    {props.text.map(renderPost)}
            </div>
            <div>
                <p>
                    likes
                </p>
                <p>
                    16
                </p>
            </div>
            <div>
                <textarea/>
            </div>
        </div>
    )
};
export default PostContent;