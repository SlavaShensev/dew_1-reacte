import {rerender} from "../../render";

let state = {
    profilePage: {
        postTextData: [
            {id: 1, text: 'You should see ice. It moves like it has'},
            {id: 2, text: 'You should see ice. It moves like it has a mind.'},
            {id: 3, text: '  avalanche, it took us a week to climb out'},
        ],
        newPostText: 'learn react Shensev',
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Slava'},
            {id: 2, name: 'Vova'},
            {id: 3, name: 'Gena'},
            {id: 4, name: 'Olya'},
            {id: 5, name: 'Nikolay'},
        ],
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Bay!'},
            {id: 4, message: 'Bay!'},
            {id: 5, message: 'Bay!'},
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        text: postMessage,
        likesCount: 0,
    };
    state.profilePage.postTextData.push(newPost);

    rerender(state);

};

export default state;