import { createStore } from 'redux';

export const increment = () => {
  return {
    type: 'COUNTER/INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'COUNTER/DECREMENT',
  };
};

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
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
