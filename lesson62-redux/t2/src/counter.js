import { createStore } from 'redux';

const INCREMENT = 'COUNTERINCREMENT';
const DECREMENT = 'COUNTERDECREMENT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const initialState = 0

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state -1;
    default:
      return state;
  }
};

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
