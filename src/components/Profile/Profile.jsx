import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div className={p.content}>
            <img className={p.img}
                 src="https://uiaa-web.azureedge.net/wp-content/uploads/2017/12/2018_banner.jpg"
                 alt=""/>
            <div>
                New post
                <div>
                    Ava + description
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;