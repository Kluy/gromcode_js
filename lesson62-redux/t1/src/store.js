import { createStore } from 'redux';
import { userReducer } from './users.reducer';

export default createStore(userReducer);
