import {SAVE_USER, SHOW_SPINNER, USER_NAME} from './user.actions';

const initialState = {
    userData: null,
    isFetching: false,
    userName:'',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                isFetching: true,
            }
        case SAVE_USER:
            return {
                ...state,
                userData: action.payload.userData,
                isFetching: false,
            }
        case USER_NAME: 
            return {
                ...state,
                userName: action.payload.input,
            }
        default:
            return state;
    }
}

export default userReducer;