import { setItem, getItem } from "./storage.js";
import { renderTasks } from "./render.js";

export const updateTask = (event) => {
  let taskId = event.target.dataset.id;
  if(taskId === undefined){
    taskId = event.target.firstChild.dataset.id;
  }

  const tasks = getItem('tasks').map((elem) => {
    if (String(elem.id) === taskId){
        elem.done = !elem.done;
        elem.date = new Date();
    }
    return elem;
 });

  setItem('tasks', tasks)
  renderTasks();
}