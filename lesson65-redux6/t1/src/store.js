import { createStore, applyMiddleware } from 'redux';
import { counterReducer } from './counter/counter.reducer';

const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
