import { addNewTask } from "./addTask.js";
import { updateTask } from "./updateTask.js";


export const initHandlers = () => {
    const listElem = document.querySelector('.list');
    listElem.addEventListener('click', updateTask);

    const createNewTaskButton = document.querySelector('.create-task-btn');
    createNewTaskButton.addEventListener('click', addNewTask);
}