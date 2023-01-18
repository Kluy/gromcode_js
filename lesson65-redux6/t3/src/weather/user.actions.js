import { getUserData } from "./user.gateway";

export const SAVE_USER = 'USER/SAVE_USER';
export const SHOW_SPINNER = 'USER/SHOW_SPINNER';

export const saveUserAction = (userData) => {
    return {
        type: SAVE_USER,
        payload: {
            userData,
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
        getUserData(userName).then(result => dispatch(saveUserAction(result)));
    }
}