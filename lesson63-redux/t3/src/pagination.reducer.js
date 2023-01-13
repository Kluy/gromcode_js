import { NEXT_PAGE, PREV_PAGE } from "./pagination.actions";

const paginationReducer = (state = 0, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case PREV_PAGE:
        return state - 1;
    default:
      return state;
  }
}

export default paginationReducer;