import React, { Component } from 'react';
import TasksList from './TasksList';

class ToDoList extends Component {
  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <TasksList />
      </>
    );
  }
}

export default ToDoList;
