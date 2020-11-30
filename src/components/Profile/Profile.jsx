import React from 'react';
import p from './Profile.module.css';
import bg from '../Static/Profile/bg1.jpg';


const Profile = () => {
    return (
        <div className={p.content}>
            <img className={p.img} src={bg}/>
        </div>

    )
};

export default Profile;