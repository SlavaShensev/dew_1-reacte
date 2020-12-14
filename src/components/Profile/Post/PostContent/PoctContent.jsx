import React from 'react';
import s from './PostContent.module.css';
import ava from '../../../Static/Profile/post-ava.jpg';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const PostContent = (props) => {
    const renderPost = (inputPost) => (<h3>{inputPost}</h3>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    return (
        <div>
            <div>
                <img src={ava} alt={'#'}/>
            </div>
            <div>
                <h2>
                    You think water moves fast?
                </h2>
            </div>
            <div>
                <h4>
                    admin
                </h4>
            </div>
            <div>
                {props.text.map(renderPost)}
            </div>
            <div>
                <p>
                    likes
                </p>
                <p>
                    16
                </p>
            </div>
            <div className={s.textarea}>
                <textarea className={s.textarea} onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostMessages}/>
                <button className={s.button}
                        onClick={addPost}>
                    click me
                </button>
            </div>
        </div>
    )
};

export default PostContent;