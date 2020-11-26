import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/NavBar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import './index.css';
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings1";

const socialNetwork = () => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <Navbar/>
                <div className={'appWrapper-content'}>
                    <Route path={'/profile'} component={Dialogs}/>
                    <Route path={'/dialogs'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default socialNetwork;