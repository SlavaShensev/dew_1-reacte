import React from 'react';
import p from './Profile.module.css';
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div className={p.content}>
           <Post/>
        </div>
    )
};

export default Profile;