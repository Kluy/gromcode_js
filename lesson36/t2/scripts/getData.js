import { toggleSpinner } from "./toggleSpinner.js";
import { renderData } from "./renderData.js";
import { appendList, clearList } from "./list.js";
import { sendRequest } from "./gateway.js";

const nameInputElem = document.querySelector('.name-form__input');

export const getData = async () => {
  clearList();
  toggleSpinner();
  try{
    const result = await sendRequest(`https://api.github.com/users/${nameInputElem.value}`);
    renderData(result);
    const reposResult = await sendRequest(result.repos_url);
    appendList(reposResult);
  } catch(e){
    alert(e.message);
  } finally{
    toggleSpinner();
  }
}