import { getTasks } from "./gateway.js";

export const renderTasks = () => { 
  const listElem = document.querySelector('.list');
  getTasks()
  .then(result => result
    .sort((a, b) => a.done - b.done || new Date(b.date) - new Date(a.date))
    .map(({ task, done, id }) => {

    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    listItemElem.setAttribute('data-id', id);

    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    const taskElem = document.createElement('span');
    taskElem.classList.add('list__item-task');
    taskElem.innerHTML = task;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('list__item-delete-button');
    deleteButton.innerHTML = '+';

    if (done) {
      listItemElem.classList.add('list__item_done');
    }

    listItemElem.append(checkboxElem, taskElem, deleteButton);

    return listItemElem;
  })).then(result => {
    listElem.innerHTML = '';
    listElem.append(...result);
  })
  
};