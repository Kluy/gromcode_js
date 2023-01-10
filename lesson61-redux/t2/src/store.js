import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

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

export const reset = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
      return state.concat(+1);
    case DECREMENT:
      return state.concat(-1);
    case RESET:
      return [];
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
