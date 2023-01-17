import {createStore} from 'redux';
import { usersReducer } from './UserList/users.reducer';

const store = createStore(usersReducer);

export default store;