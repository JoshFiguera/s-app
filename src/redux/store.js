import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 7},
                {id: 2, message: 'ohh', likesCount: 12}
            ],
            newPostText: 'it'
        },
        dialogsPage: {

            dialogs: [
                {id: 1, name: 'Me'},
                {id: 2, name: 'You'},
                {id: 3, name: 'Ilya'},
                {id: 4, name: 'eka'}
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Who are you?'},
                {id: 3, message: 'Me'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State Changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {  // экшн - объект, который говорит какое действие совершить { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;









