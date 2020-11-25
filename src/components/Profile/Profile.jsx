import React from "react";
import s from './Profile.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src={'https://images.all-free-download.com/images/graphicthumb/forest_background_leafless_trees_icons_cartoon_design_6829779.jpg'}/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>

    )
};


export default Profile;