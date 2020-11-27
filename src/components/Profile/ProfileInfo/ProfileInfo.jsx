import React from "react";
import Pr from "../Profile.module.css";
import bg from "../../Static/bg/1200px-Pokai_Bucht_auf_Oahu.jpg";


const ProfileInfo = () => {

    return (
        <div>
            <img className={Pr.postBg} src={bg}/>
        </div>

    )
};

export default ProfileInfo;