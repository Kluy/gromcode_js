import React from 'react';
import ToDoList from './ToDoList';

const TasksList = () => {
  return (
    <div class="create-task">
      <input class="create-task__input" type="text" value="" />
      <button class="btn create-task__btn">Create</button>
    </div>
  );
}

export default TasksList;
