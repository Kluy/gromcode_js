import {SAVE_USER, SHOW_SPINNER} from './user.actions';

const initialState = {
    userData: null,
    isFetching: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                isFetching: true,
            }
        case SAVE_USER: {
            return {
                ...state,
                userData: action.payload.userData,
                isFetching: false,
            }
        }
        default:
            return state;
    }
}

export default userReducer;