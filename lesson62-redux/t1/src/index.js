import store from "./store.js";
import { addUser, deleteUser, updateUser } from "./users.actions.js";
import { increment, decrement, reset } from "./counter.actions.js";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({id: 76, name: 'Tom'}));
store.dispatch(deleteUser(76));
store.dispatch(addUser({id: 75, name: 'Tom'}));
store.dispatch(updateUser(75, {name: 'Tomm', age: 12}));
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(reset());