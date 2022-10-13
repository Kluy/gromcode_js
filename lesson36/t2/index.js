import { getData } from "./scripts/getData.js";
import { renderData } from "./scripts/renderData.js"

renderData({avatar_url:"https://avatars3.githubusercontent.com/u10001"})

const buttonElem = document.querySelector('.name-form__btn');
buttonElem.addEventListener('click', getData);