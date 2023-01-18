export const SAVE_USER = 'USER/SAVE_USER';
export const SHOW_SPINNER = 'USER/SHOW_SPINNER';

export const saveUser = (userData) => {
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

