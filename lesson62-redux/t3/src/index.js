import { addProduct, removeProduct } from "./cart.actions.js";
import { setLanguage } from "./language.actions.js";
import store from "./store.js";
import { removeUser, setUser } from "./user.actions.js";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({id:1,name:'ddd'}));
store.dispatch(addProduct({id:2,name:'fff'}));
store.dispatch(removeProduct(1));
store.dispatch(setLanguage('es'));
store.dispatch(setUser({name:'Bob'}));
store.dispatch(removeUser());
