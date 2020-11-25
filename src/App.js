import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import './index.css';
import './App.css';

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