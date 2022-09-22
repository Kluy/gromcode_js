import { setItem, getItem } from "./storage.js";
import { renderTasks } from "./render.js";
import { listElem } from "./handlers.js";

export const updateTask = (event) => {
  let taskId = event.target.dataset.id;
  if(taskId === undefined){
    taskId = event.target.firstChild.dataset.id;
  }

  const tasks = getItem('tasks').map((elem) => {
    if (String(elem.id) === taskId){
        elem.done = !elem.done;
    }
    return elem;
 });

  listElem.textContent = '';

  setItem('tasks', tasks)
  renderTasks();
}