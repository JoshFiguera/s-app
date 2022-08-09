const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

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
    ]
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;