import { combineReducers, createStore } from 'redux';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';

const appReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

const store = createStore(appReducer);

export default store;
