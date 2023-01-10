export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

const initialState = {
  usersList: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat({id: 76, name: 'Tom'})
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(elem => elem.id !== action.id)
      };
    default:
      return state;
  }
};