import { toggleSpinner } from "./toggleSpinner.js";
import { renderData } from "./renderData.js";
import { appendList, clearList } from "./list.js";
import { sendRequest } from "./gateway.js";

const nameInputElem = document.querySelector('.name-form__input');

export const getData = () => {
  clearList();
  toggleSpinner();
  sendRequest(`https://api.github.com/users/${nameInputElem.value}`)
  .then(result => {
    renderData(result);
    return result.repos_url
  })
  .then(url => sendRequest(url))
  .then(result => appendList(result))
  .catch(() => alert('Failed to load data'))
  .finally(() => toggleSpinner());
}