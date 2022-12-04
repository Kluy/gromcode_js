import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';

class ToDoList extends Component {

  render(){
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput />
          <TasksList />
        </main>
      </>
    );
  }
};

export default ToDoList;
