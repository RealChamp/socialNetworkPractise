const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 7,
                    message: state.newMessageText,
                }],
                newMessageText: ''
            }

        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
});


export default dialogsReducer;