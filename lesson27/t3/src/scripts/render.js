import { getItem } from "./storage.js";
import { listElem } from "./handlers.js";

export const renderTasks = () => { 
  const tasks = getItem('tasks') || [];
  const tasksElems = tasks.sort((a, b) => a.done - b.done)
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

//   const tasksElems = tasks.sort((a, b) => (b.done < a.done) - (a.done < b.done) || (b.date < a.date) - (a.date < b.date))