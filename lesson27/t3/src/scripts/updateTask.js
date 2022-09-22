import { setItem, getItem } from "./storage.js";
import { renderTasks } from "./render.js";

export const updateTask = (event) => {
  const taskId = event.target.dataset.id === undefined ? event.target.firstChild.dataset.id : event.target.dataset.id;

  const tasksList = getItem('tasksList').map((elem) => {
    if (String(elem.id) === taskId){
        elem.done = !elem.done;
        elem.date = new Date();
    }
    return elem;
  });

  setItem('tasksList', tasksList);
  renderTasks();
}