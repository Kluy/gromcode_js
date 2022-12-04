import React from 'react';
import ToDoList from './ToDoList';

const TasksList = () => {
  return (
    <ul class="list">
      <li class="list-item">
        <input type="checkbox" class="list-item__checkbox" />
        Learn React
        <button class="list-item__delete-btn"></button>
      </li>
      <li class="list-item list-item_done">
        <input type="checkbox" class="list-item__checkbox" />
        Lear HTML / CSS
        <button class="list-item__delete-btn"></button>
      </li>
      <li class="list-item list-item_done">
        <input type="checkbox" class="list-item__checkbox" />
        Learn JavaScript
        <button class="list-item__delete-btn"></button>
      </li>
      <li class="list-item list-item_done">
        <input type="checkbox" class="list-item__checkbox" />
        Learn Dev Tools
        <button class="list-item__delete-btn"></button>
      </li>
    </ul>
  );
}

export default TasksList;
