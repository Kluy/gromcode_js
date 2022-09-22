import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./render.js";

export const addNewTask = () => {
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value;
  const tasksList = getItem('tasksList') || [];

  taskText === '' ? undefined : tasksList.unshift({
    text:taskText,
    done:false,
    id: Math.random(),
    date: new Date()
  });

  taskInput.value = '';
  setItem('tasksList', tasksList);
  renderTasks(); 
};