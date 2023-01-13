import usersListReducer from "./usersList.reducer";
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import paginationReducer from "./pagination.reducer";

// const store = createStore(usersListReducer);

const appReducer = combineReducers({
    users: usersListReducer,
    currentPage: paginationReducer
})

const store = createStore(appReducer);

export default store;