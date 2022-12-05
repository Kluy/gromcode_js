import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';

const baseUrl = 'https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/tasks-react/'

class ToDoList extends Component {

 state = {
    tasks:[],
  }

  componentDidMount(){
    this.fetchData();
  }

  handleTaskUpdate = (taskId) => {
    const {done, text} = this.state.tasks.find(elem => elem.id === taskId);
    const updatedTask = {text, done:!done};
    fetch(`${baseUrl}${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify(updatedTask)
     }).then(response => {
      if(response.ok)
      this.fetchData();
      else throw new Error('Task didn"t updated');
    });
  }

  handleTaskCreate = () => {
    const newTask = {text: this.state.input, done:false};
    this.setState({input:''});

    fetch(`${baseUrl}`, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify(newTask)
    }).then(response => {
      if(response.ok){
        this.fetchData();
      }
      else throw new Error('Task didn"t created');
    });
  }

  handleTaskDelete = (taskId) => {
     fetch(`${baseUrl}${taskId}`,
     {method: 'DELETE',})
     .then(response => {
      if(response.ok)
      this.fetchData();
      else throw new Error('Task didn"t deleted');
    });
  }

   fetchData = () => {
    fetch(`${baseUrl}`)
    .then(response => {
      if(response.ok)
      return response.json();
    })
    .then(result => {
      this.setState({tasks:result})
    });
  }

  handleInputChange = (e) => {
    this.setState({input:e.target.value});
  }

  render(){
    const sortedTasks = this.state.tasks.sort((a, b) => a.done - b.done);
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput input={this.state.input} onCreate={this.handleTaskCreate} onChange={this.handleInputChange} />
          <TasksList tasks={sortedTasks} onChange={this.handleTaskUpdate} onDelete={this.handleTaskDelete} />
        </main>
      </>
    );
  }
};

export default ToDoList;
