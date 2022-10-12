import { getData } from "./getData.js";

const buttonElem = document.querySelector('.name-form__btn');

buttonElem.addEventListener('click', getData);