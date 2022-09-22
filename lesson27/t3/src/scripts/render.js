import { getItem } from "./storage.js";

export const renderTasks = () => { 
  const listElem = document.querySelector('.list');
  const tasksList = getItem('tasksList') || [];
  const tasksElems = tasksList.sort((a, b) => a.done - b.done || new Date(b.date) - new Date(a.date))
  .map(({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');
    checkbox.setAttribute('data-id', id);
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkbox, text);
    
    return listItemElem;
  });
  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};