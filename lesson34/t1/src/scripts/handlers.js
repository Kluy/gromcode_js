import { addNewTask } from "./addTask.js";
import { updateList } from "./updateList.js";

export const initHandlers = () => {
    const listElem = document.querySelector('.list');
    listElem.addEventListener('click', updateList);

    const createNewTaskButton = document.querySelector('.create-task-btn');
    createNewTaskButton.addEventListener('click', addNewTask);
}