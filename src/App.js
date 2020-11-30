import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <NavBar/>
                <div className={'appWrapper-content'}>
                    <Route component={Dialogs}/>
                    <Route component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
