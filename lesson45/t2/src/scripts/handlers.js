import addNewTask from './addTask';
import updateList from './updateList';

export default () => {
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', updateList);

  const createNewTaskButton = document.querySelector('.create-task-btn');
  createNewTaskButton.addEventListener('click', addNewTask);
};
