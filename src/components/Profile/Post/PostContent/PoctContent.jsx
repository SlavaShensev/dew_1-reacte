import React from 'react';
import s from './PostContent.module.css';
import ava from '../../../Static/Profile/post-ava.jpg';


const PostContent = () => {
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
                <p>
                    You should see ice. It moves like it has a
                    mind. Like it knows it killed the world once
                    and got a taste for murder. After the
                    avalanche, it took us a week to climb out....
                </p>
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
                <textarea>

                </textarea>
            </div>
        </div>
    )
};

export default PostContent;