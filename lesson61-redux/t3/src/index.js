import store from "./store";
import { addUser, deleteUser } from "./users.actions.js";

store.dispatch(addUser())
store.dispatch(deleteUser(76))
store.subscribe(() => console.log(store.getState()))