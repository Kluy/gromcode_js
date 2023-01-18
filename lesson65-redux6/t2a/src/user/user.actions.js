import { getUserData } from "./user.gateway";

export const SAVE_USER = 'USER/SAVE_USER';
export const SHOW_SPINNER = 'USER/SHOW_SPINNER';
export const USER_NAME = 'USER/USER_NAME';

export const saveUserAction = (userData) => {
    return {
        type: SAVE_USER,
        payload: {
            userData,
        }
    }
}

export const inputAction = (input) => {
    return {
        type: USER_NAME,
        payload: {
            input,
        }
    }
}

export const showSpinnerAction = () => {
    return{
        type: SHOW_SPINNER,
    }
}

export const fetchUserData = (userName) => {
    return function (dispatch) {
        dispatch(showSpinnerAction());
        getUserData(userName).then(result => dispatch(saveUserAction(result)));
    }
}