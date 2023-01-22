import { renderTasks } from './render';
import { addTask } from './gateway';

export const addNewTask = () => {
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value;

  if (taskText !== '') {
    addTask({
      task: taskText,
      done: false,
      date: new Date(),
    }).then(() => renderTasks());
    taskInput.value = '';
  }
};
