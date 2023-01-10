import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

import './index.scss';

const addUserBtn = document.querySelector('[data-action="increment"]');
const deleteUserBtn = document.querySelector('[data-action="decrement"]');
const resultElem = document.querySelector('.counter__result');

const handleAddUser = () =>{
    store.dispatch(addUser())
}

const handleDeleteUser = () =>{
    store.dispatch(deleteUser(76))
}

const handleReset = () =>{
    store.dispatch(reset())
}

addUserBtn.addEventListener('click', handleAddUser);
deleteUserBtn.addEventListener('click', handleDeleteUser);


store.dispatch(addUser())
store.dispatch(deleteUser(76))
store.subscribe(() => console.log(store.getState()))