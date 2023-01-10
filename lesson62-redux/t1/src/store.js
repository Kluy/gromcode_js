import { createStore, combineReducers } from 'redux';
import { userReducer } from './users.reducer';

const store = combineReducers({
    users: userReducer,
})

export default store;
