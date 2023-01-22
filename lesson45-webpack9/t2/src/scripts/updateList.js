import { renderTasks } from './render';
import { deleteTask, getTasks, updateTask } from './gateway';

export const updateList = (event) => {
  const taskId = event.target.parentElement.dataset.id || event.target.dataset.id;
  if (event.target.classList.contains('list__item-delete-button')) {
    deleteTask(taskId).then(() => renderTasks());
  } else {
    getTasks()
      .then((result) => result.find((elem) => elem.id === taskId))
      .then((result) => {
        const newTask = result;
        newTask.done = !result.done;
        updateTask(newTask.id, newTask).then(() => renderTasks());
      });
  }
};
