import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { createTask, deleteTask, fetchTasks, updateTask } from '../tasks.gateway';
import { tasksSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';
import {connect} from 'react-redux';
import { useEffect } from 'react';



const TasksList = ({tasksList, getTasks}) => {

  useEffect(() => {
    getTasks();
  }, []);
  // state = {
  //   tasks: [],
  // };

  // componentDidMount() {
  //   this.renderTasks();
  // }

  // renderTasks = () => {
  //   fetchTasks().then((result) => this.setState({ tasks: result }));
  // };

  // handleTaskUpdate = (taskId) => {
  //   const { done, text } = this.state.tasks.find((elem) => elem.id === taskId);
  //   const updatedTask = { text, done: !done };

  //   updateTask(taskId, updatedTask).then((result) => this.renderTasks());
  // };

  // handleTaskCreate = () => {
  //   const newTask = { text: this.state.input, done: false };
  //   this.setState({ input: '' });
  //   createTask(newTask).then((result) => this.renderTasks());
  // };

  // handleTaskDelete = (taskId) => {
  //   deleteTask(taskId).then((result) => this.renderTasks());
  // };

  // handleInputChange = (e) => {
  //   this.setState({ input: e.target.value });
  // };

    const sortedTasks = tasksList.sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput
          // input={this.state.input}
          // onCreate={this.handleTaskCreate}
          // onChange={this.handleInputChange}
        />
        <ul className="list">
          {sortedTasks.map((elem) => (
            <Task
              // onChange={this.handleTaskUpdate}
              // onDelete={this.handleTaskDelete}
              key={elem.id}
              {...elem}
            />
          ))}
        </ul>
      </main>
    );
  }

const mapState = (state) => {
  return {
    tasksList: tasksSelector(state),
  }
}

const mapDispatch = {
  getTasks: tasksActions.getTasksAction,
}

export default connect(mapState, mapDispatch)(TasksList);
