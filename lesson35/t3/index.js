import { getData } from "./scripts/getData.js";

export const avatarElem = document.querySelector('.user__avatar');
avatarElem.src ="https://avatars3.githubusercontent.com/u10001";

const buttonElem = document.querySelector('.name-form__btn');
buttonElem.addEventListener('click', getData);