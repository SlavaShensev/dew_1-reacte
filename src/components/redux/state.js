let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    addPost() {
        let newPost = {
            id: 4,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postTextData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this.state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    }
};

export default store;
window.store = store;