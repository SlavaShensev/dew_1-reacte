import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./components/redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./components/redux/state";
let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerender(state);
subscribe(rerender);





reportWebVitals();
