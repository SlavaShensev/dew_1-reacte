

let rerender = () => {
    console.log('State was changed')
};
let state = {
    profilePage: {
        postTextData: [
            {id: 1, text: 'You should see ice. It moves like it has a mind.'},
            {id: 2, text: 'You should see ice. It moves like it has a mind.'},
            {id: 3, text: ' Avalanche, it took us a week to climb out'},
        ],
        newPostText: 'Shensev learn react',
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Mason'},
            {id: 2, name: 'Evelyn'},
            {id: 3, name: 'Jackson'},
            {id: 4, name: 'Avery'},
            {id: 5, name: 'Scarlett'},
        ],
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Are you busy?'},
            {id: 4, message: 'What date is today?'},
            {id: 5, message: 'I am hungry!'},
        ],

    }
};
export const addPost = () => {
    let newPost = {
        id: 4,
        text: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postTextData.push(newPost);
    state.profilePage.newPostText = '';
    rerender(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerender(state);
};
export const subscribe = (observe) => {
    rerender = observe;
};
export default state;