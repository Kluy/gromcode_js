import { renderTasks } from "./render.js";
import { addTask } from "./gateway.js";

export const addNewTask = () => {
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value;

  if(taskText !== ''){
    addTask({
    task:taskText,
    done:false,
    date: new Date()
  }).then(() => renderTasks());
  taskInput.value = '';
  }
};