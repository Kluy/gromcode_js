import { ADD_USER, DELETE_USER } from "./users.actions";

const initialState = {
  userLists: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userLists: state.userLists.concat({id: 76, name: 'Tom'})
      };
    case DELETE_USER:
      return {
        ...state,
        userLists: state.userLists.filter(elem => elem.id !== action.id)
      };
    default:
      return state;
  }
};