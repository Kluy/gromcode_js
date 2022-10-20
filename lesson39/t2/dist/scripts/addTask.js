import { renderTasks } from "./render.js";
import { addTask } from "./gateway.js";
export var addNewTask = function addNewTask() {
  var taskInput = document.querySelector('.task-input');
  var taskText = taskInput.value;
  if (taskText !== '') {
    addTask({
      task: taskText,
      done: false,
      date: new Date()
    }).then(function () {
      return renderTasks();
    });
    taskInput.value = '';
  }
};