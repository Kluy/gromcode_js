'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  // put your code here
  // const list = document.querySelector('.list');
    const todoList = document.querySelector('.todo-list');
    const list = document.createElement('ul');
    list.classList.add('list');
    const arrElements = tasksList.map(({ text, done }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    const checkbox = document.createElement('input');
    checkbox.classList.add('list__item-checkbox');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    if (checkbox.checked === true) {
      listItem.classList.add('list__item_done');
    }
    listItem.append(checkbox, text);
    return listItem;
  });
  todoList.append(list);
  list.append(...arrElements);
};

renderTasks(tasks);
