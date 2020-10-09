import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {

        profilePage: {

            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'its my first post', likesCount: 11},
            ],
            newPostText: '',
        },

        dialogsPage: {

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'World'},
                {id: 5, message: 'How is your it'},
                {id: 6, message: 'Good'},
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    img: 'https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                },
                {
                    id: 2,
                    name: 'Andrew',
                    img: 'https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    img: 'https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                },
                {
                    id: 4,
                    name: 'Sasha',
                    img: 'https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                },
                {
                    id: 5,
                    name: 'Viktor',
                    img: 'https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                },
                {
                    id: 6,
                    name: 'Valera',
                    img: 'https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                },
            ],
            newMessageText: '',


        },

    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._callSubscriber(this._state);
    },
};




export default store;


