import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/NavBar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import './index.css';
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const socialNetwork = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Navbar/>
            <div className={'appWrapper-content'}>
                <Profile/>
                <Dialogs/>
            </div>
        </div>
    )
};

export default socialNetwork;