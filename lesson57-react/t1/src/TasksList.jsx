import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
  // state = {
  //   tasks:[
  //   {text:"Learn React", done:false, id:1},
  //   {text:"Lear HTML / CSS", done:false, id:2},
  //   {text:"Learn JavaScript", done:false, id:3},
  //   {text:"Learn Dev Tools", done:true, id:4},
  // ],}

  // handleDone = (e) => {
  //   const arr = [...this.state.tasks]
  //   arr[e.target.id - 1].done = !arr[e.target.id - 1].done;
  //   this.setState({tasks:arr})
  // }

  render(){
    return (
        <ul className="list">
          {this.props.tasks.map(elem => <Task onDone={this.props.onDone} key={elem.id} {...elem} />)}
        </ul>
    );
  }
}

export default TasksList;
