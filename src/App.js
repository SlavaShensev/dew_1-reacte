import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings1";
import './App.css';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <NavBar/>
                <div className={'appWrapper-content'}>
                    <Route path={'/profile'}
                           render={() => <Profile text={props.state.profilePage.postTextData}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.state.dialogsPage.dialogsData}
                                                  messages={props.state.dialogsPage.messagesData}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default App;
