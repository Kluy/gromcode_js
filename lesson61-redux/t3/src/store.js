import { createStore } from 'redux';
import { userReducer } from './users.reducer';

export const store = createStore(userReducer);
