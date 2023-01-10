// import { ADD_USER, DELETE_USER } from "./users.reducer";

export const addUser = () => {
  return {
    type: 'ADD_USER',
  };
};

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id,
  };
};