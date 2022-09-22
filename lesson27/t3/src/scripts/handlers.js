import { addNewTask } from "./addTask.js";
import { updateTask } from "./updateTask.js";

export const listElem = document.querySelector('.list');

export const initHandlers = () => {
    listElem.addEventListener('click', updateTask);

    const createNewTaskButton = document.querySelector('.create-new-task-btn');
    createNewTaskButton.addEventListener('click', addNewTask);
}