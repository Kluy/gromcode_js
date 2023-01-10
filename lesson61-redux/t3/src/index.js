import { store } from "./store";
// import { addUser, deleteUser, store } from "./store";
import { addUser, deleteUser } from "./users.action.js";

import './index.scss';

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const resultElem = document.querySelector('.counter__result');

const handleDecrement = () =>{
    store.dispatch(addUser())
}

const handleIncrement = () =>{
    store.dispatch(deleteUser(76))
}

decrementBtn.addEventListener('click', handleDecrement);
incrementBtn.addEventListener('click', handleIncrement);

store.subscribe(() => console.log(store.getState()))