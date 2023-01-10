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