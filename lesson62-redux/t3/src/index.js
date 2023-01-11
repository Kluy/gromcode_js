import { addProduct, removeProduct } from "./cart.actions.js";
import store from "./store.js";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({id:1,name:'ddd'}));
store.dispatch(removeProduct(1));