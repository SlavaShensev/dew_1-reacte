import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/NavBar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import './index.css';
import './App.css';
import Profile from "./components/Profile/Profile";

const socialNetwork = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    )
};

export default socialNetwork;