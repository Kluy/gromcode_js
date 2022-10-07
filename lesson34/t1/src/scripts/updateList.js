import { renderTasks } from "./render.js";
import { deleteTask, getTasks, updateTask } from "./gateway.js";

export const updateList = (event) => {
  const taskId = event.target.parentElement.dataset.id || event.target.dataset.id;
  if(event.target.classList.contains('list__item-delete-button')){
    deleteTask(taskId).then(() => renderTasks());
  } else {
    getTasks()
    .then(result => result.find((elem) => elem.id === taskId))
    .then(result => {
      result.done = !result.done;
      updateTask(result.id, result).then(() => renderTasks());
    });
  }
}