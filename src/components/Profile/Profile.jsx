import React from 'react';
import p from './Profile.module.css';
import Post from "./Post/Post";


const Profile = (props) => {
    console.log(props);
    return (
        <div className={p.content}>
           <Post {...props}/>
        </div>
    )
};

export default Profile;