import {authAPI as loginAPI} from "../api/api";


const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD';

let initialState = {
    email: null,
    password: null,
    rememberMe: null,
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {

            return {
                ...state,
            }
        }
        case SET_PASSWORD: {

            return {
                ...state,
                password: state.password
            }
        }
        default:
            return state;

    }
}


export const setLoginUserData = ( email, password, rememberMe) =>
    ({type: SET_LOGIN, data: {email, password, rememberMe}})

export const setPassword = ( password) =>
    ({type: SET_PASSWORD, data: {password}})


export const getLoginUserData = () => (dispatch) => {
    loginAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, password, rememberMe} = response.data.data;
                dispatch (setLoginUserData(email, password, rememberMe));
            }
        });

}

export default loginReducer;