import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./render.js";
import { listElem } from "./handlers.js";

export const addNewTask = () => {
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value;
  const tasks = getItem('tasks') || [];

  taskText === '' ? undefined : tasks.unshift({text:taskText, done:false, id: Math.random(), date: new Date()});
  
  taskInput.value = '';
  listElem.textContent = '';

  setItem('tasks', tasks);

  renderTasks(); 
};