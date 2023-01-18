import {createStore, applyMiddleware } from 'redux';
import userReducer from './user/user.reducer';

const logger = state => next => action => {
    console.group(action.type);
    console.info('dicpatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
}

const store = createStore(
    userReducer,
    applyMiddleware(logger)
    );

export default store;