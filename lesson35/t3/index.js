import { getData } from "./scripts/getData.js";
const avatarElem = document.querySelector('.user__avatar');
const buttonElem = document.querySelector('.name-form__btn');

avatarElem.src ="https://avatars3.githubusercontent.com/u10001";

buttonElem.addEventListener('click', getData);