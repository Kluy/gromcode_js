import { ADD_USER, DELETE_USER } from "./users.actions";

const initialState = {
  usersList: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.user)
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(elem => elem.id !== action.payload.id)
      };
    default:
      return state;
  }
};