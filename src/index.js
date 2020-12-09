import reportWebVitals from './reportWebVitals';
import store from "./components/redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerender(store.getState());

store.subscribe(rerender);


reportWebVitals();
