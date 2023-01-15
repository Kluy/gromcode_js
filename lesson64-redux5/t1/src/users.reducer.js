import { initialState } from "./users";
import { NEXT_PAGE, PREV_PAGE } from "./users.actions";

const usersReducer = (state = initialState, action) => {
  console.log(state);
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
          currentPage: state.users.currentPage - 1,
        } 
      }
    default:
      return state;
  }
}


export default usersReducer;