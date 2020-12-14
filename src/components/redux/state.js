const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state: {
        profilePage: {
            postTextData: [
                {id: 1, text: 'You should see ice. It moves like it has a mind.'},
                {id: 2, text: 'You should see ice. It moves like it has a mind.'},
                {id: 3, text: ' Avalanche, it took us a week to climb out'},
            ],
            newPostText: 'Shensev learning react',
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
            newPostMessages: 'Hello!',
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                text: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postTextData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;
window.store = store;

