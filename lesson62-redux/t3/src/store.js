import { combineReducers, createStore } from 'redux';
import { cartReducer } from './cart.reducer';
// import { userReducer } from './users.reducer';

const appReducer = combineReducers({
    // users: userReducer,
    cart: cartReducer,
})

const store = createStore(appReducer);

export default store;
