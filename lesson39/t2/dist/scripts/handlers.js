import { addNewTask } from "./addTask.js";
import { updateList } from "./updateList.js";
export var initHandlers = function initHandlers() {
  var listElem = document.querySelector('.list');
  listElem.addEventListener('click', updateList);
  var createNewTaskButton = document.querySelector('.create-task-btn');
  createNewTaskButton.addEventListener('click', addNewTask);
};