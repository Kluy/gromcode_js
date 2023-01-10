import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

import './index.scss';

const addUserBtn = document.querySelector('[data-action="increment"]');
const deleteUserBtn = document.querySelector('[data-action="decrement"]');

const handleAddUser = () =>{
    store.dispatch(addUser({id: 76, name: 'Tom'}))
}

const handleDeleteUser = () =>{
    store.dispatch(deleteUser(76))
}

addUserBtn.addEventListener('click', handleAddUser);
deleteUserBtn.addEventListener('click', handleDeleteUser);

store.dispatch(addUser({id: 76, name: 'Tom'}));
store.dispatch(deleteUser(76));
store.subscribe(() => console.log(store.getState()));