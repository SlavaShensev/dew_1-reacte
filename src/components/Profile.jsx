import React from "react";
import c from './Profile.module.css';

const Profile = () => {
    return (
        <div className={c.content}>
            <img className={c.mainBg}
                 src={'https://media.istockphoto.com/vectors/forest-background-nature-landscape-evergreen-coniferous-trees-pine-vector-id1029783828?b=1&k=6&m=1029783828&s=612x612&w=0&h=MRxz5HuROkaP9dwQmkSS35emBuxXq5OG_6WQpwoYRBY='}/>
            <div className={c.main}>
                <div className={c.avatar}>
                    <img className={c.img}
                         src={'https://cnet4.cbsistatic.com/img/NEgl8nYiydXHsj-SKSfYqTRPMaU=/1200x675/2019/06/09/0ecacdde-6fcd-42e6-8a3f-f7abb491ddc8/cyberpunk-2077-keanu-reeves-e3.png'}/>
                </div>

                <div className={c.title}>
                    Shensev Slava
                </div>
                <div className={c.info}>
                    Date of birthday: 28 september 1992<br/>
                    City: Pervomayskiy<br/>
                    Education: school 3<br/>
                    Website: http://SlavaShensev@gmail,com<br/>
                </div>
            </div>
        </div>
    )
};


export default Profile;