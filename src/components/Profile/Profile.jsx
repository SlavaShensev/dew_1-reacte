import React from 'react';
import p from './Profile.module.css';
import bg from '../Static/Profile/bg1.jpg';


const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <h2>
                    Recent post
                </h2>
            </div>
            <div>
                <img className={p.img} src={bg}/>
            </div>
            <div>
                <div>
                    <img/>
                </div>
                <div>
                    <h3>
                        You think water moves fast?
                    </h3>
                </div>
                <div>
                    <p>
                        by admin
                    </p>
                </div>
                <div>
                    <p>
                        You should see ice. It moves like it has a
                        mind. Like it knows it killed the world once
                        and got a taste for murder. After the
                        avalanche, it took us a week to climb out....
                    </p>
                </div>
            </div>


        </div>

    )
};

export default Profile;