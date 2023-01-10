import { createStore } from 'redux';

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';


export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};

const initialState = {
  userLists: []
}

const counterReducer = (state = initialState, action) => {
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

export const store = createStore(counterReducer);
