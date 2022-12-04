import React, { Component } from 'react';
import TasksList from './TasksList';

class ToDoList extends Component {

  render(){
    return (
      <>
        <h1 class="title">Todo List</h1>
        <main class="todo-list">
          <TasksList />
        </main>
      </>
    );
  }
};

export default ToDoList;
