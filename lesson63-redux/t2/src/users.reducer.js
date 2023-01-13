import { DELETE_USER, ADD_USER } from "./users.actions";

const initialState = {
    users: {
        usersList: [],
    }
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_USER:{
            return {
                ...state,
                users: {
                    usersList: state.users.usersList.concat(action.payload.user),
                } 
            } 
        }
        case DELETE_USER: {
            return {
                ...state,
                users: {
                    usersList: state.users.usersList.filter(elem => elem.id !== action.payload.id),
                }
            }     
        }
        default:{
            return state;
        }
    }
}