import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";



store.dispatch(addUser({id: 76, name: 'Tom'}));
store.dispatch(deleteUser(76));
store.subscribe(() => console.log(store.getState()));