import { toggleSpinner } from "./toggleSpinner.js";
import { renderData } from "./renderData.js";
import { createListElem } from "./appendList.js";
import { sendRequest } from "./gateway.js";

const nameInputElem = document.querySelector('.name-form__input');

export const getData = () => {
  toggleSpinner();
  sendRequest(`https://api.github.com/users/${nameInputElem.value}`)
  .then(result => {
    renderData(result);
    return result.repos_url
  })
  .then(url => sendRequest(url))
  .then(result => createListElem(result))
  .catch(() => alert('Failed to load data'))
  .finally(() => toggleSpinner());
}