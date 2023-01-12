import { combineReducers, createStore } from 'redux';
import { cartReducer } from './cart.reducer';
import { languageReducer } from './language.reducer';
import { userReducer } from './user.reducer';

const appReducer = combineReducers({
    language: languageReducer,
    user: userReducer,
    cart: cartReducer,
})

const store = createStore(appReducer);

export default store;
