import { decrement, increment, reset, store } from "./store";

import './index.scss';

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const resultElem = document.querySelector('.counter__result');

const handleDecrement = () =>{
    store.dispatch(decrement())
}

const handleIncrement = () =>{
    store.dispatch(increment())
}

const handleReset = () =>{
    store.dispatch(reset())
}

decrementBtn.addEventListener('click', handleDecrement);
incrementBtn.addEventListener('click', handleIncrement);
resetBtn.addEventListener('click', handleReset);

store.subscribe(() => resultElem.textContent = store.getState().length === 0 ? '' : `${store.getState().join('')} = ${store.getState().reduce((acc,elem) => acc + Number(elem), 0)}`);
