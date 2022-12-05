import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';

const baseUrl = 'https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/tasks/'

class ToDoList extends Component {

 state = {
    input:'',
    tasks:[],
  }

  componentDidMount(){
    this.fetchData();
  }

  handleTaskUpdate = (taskId) => {
    const task = this.state.tasks.find(elem => elem.id = taskId);
    task.done = !task.done;
    fetch(`${baseUrl}${taskId}`, {
      method: 'PUT',
       headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
     }).then(response => {
      if(response.ok)
      this.fetchData();
      else throw new Error('Task didn"t updated');
    });
  }

  fetchData = () => {
    fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(result => {
      this.setState({tasks:result})
    });
  }

  handleTaskCreate = () => {
    const newTask = {task: this.state.input, date:new Date(), done:false};
    
    fetch(`${baseUrl}`, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify(newTask)
    }).then(response => {
      if(response.ok)
      this.fetchData();
      else throw new Error('Task didn"t created');
    });
  }

  handleTaskDelete = (taskId) => {
    console.log(taskId);
     fetch(`${baseUrl}${taskId}`,
     {
        method: 'DELETE',
     }).then(response => {
      if(response.ok)
      this.fetchData();
      else throw new Error('Task didn"t deleted');
    });
  }

  handleChange = (e) => {
    this.setState({input:e.target.value});
  }

  render(){
    const sortArr = this.state.tasks.sort((a, b) => a.done - b.done);
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput input={this.state.input} onCreate={this.handleTaskCreate} onChange={this.handleChange} />
          <TasksList tasks={sortArr} onChange={this.handleTaskUpdate} onDelete={this.handleTaskDelete} />
        </main>
      </>
    );
  }
};

export default ToDoList;
