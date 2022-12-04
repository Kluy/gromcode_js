import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';

class ToDoList extends Component {

 state = {
    input:'',
    tasks:[
      {text:"Learn React", done:false, id:1},
      {text:"Lear HTML / CSS", done:false, id:2},
      {text:"Learn JavaScript", done:false, id:3},
      {text:"Learn Dev Tools", done:true, id:4},
    ]
  }

  handleDone = (e) => {
    const arr = [...this.state.tasks];
    arr[e.target.id - 1].done = !arr[e.target.id - 1].done;
    this.setState({tasks:arr});
  }

  handleChange = (e) => {
    this.setState({input:e.target.value});
  }

  handleCreate = () => {
     const arr = [...this.state.tasks];
     arr.push({text: this.state.input, done:false, id:arr.length + 1});
     this.setState({tasks:arr});
  }

  render(){
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput input={this.state.input} onCreate={this.handleCreate} onChange={this.handleChange} />
          <TasksList tasks={this.state.tasks} onDone={this.handleDone} />
        </main>
      </>
    );
  }
};

export default ToDoList;
