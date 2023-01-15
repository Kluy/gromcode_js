import { NEXT_PAGE, PREV_PAGE } from "./users.actions";
const initialState = {
  users:{
    usersList: [
      {
        id: 'id-0',
      age: 21,
      name: 'Bob',
    },
    {
      id: 'id-1',
      age: 17,
      name: 'Tom',
    },
    {
      id: 'id-2',
      age: 18,
      name: 'Tad',
    },
    {
      id: 'id-3',
      age: 45,
      name: 'Justin',
    },
    {
      id: 'id-4',
      age: 45,
      name: 'Franklin',
    },
    {
      id: 'id-5',
      age: 45,
      name: 'John',
    },
    {
      id: 'id-6',
      age: 45,
      name: 'Andrew',
    },
    {
      id: 'id-7',
      age: 45,
      name: 'Pol',
    },
    {
      id: 'id-8',
      age: 45,
      name: 'Ron',
    },
    {
      id: 'id-9',
      age: 45,
      name: 'Harry',
    },
    {
      id: 'id-10',
      age: 45,
      name: 'Anna',
    },
    {
      id: 'id-12',
      age: 45,
      name: 'Anna',
    },
    {
      id: 'id-13',
      age: 45,
      name: 'Anna',
    },
  ],
  currentPage: 0,
}
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        } 
      }
    case PREV_PAGE:
       return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        } 
      }
    default:
      return state;
  }
}


export default usersReducer;