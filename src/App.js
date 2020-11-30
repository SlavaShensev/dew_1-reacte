import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import './App.css';
// import logo from '/src/components/Static/slack.png'

const App = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    )
};

export default App;
