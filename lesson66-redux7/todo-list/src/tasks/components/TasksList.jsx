import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { createTask, deleteTask, fetchTasks, updateTask } from '../tasks.gateway';
import { tasksSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';
import {connect} from 'react-redux';
import { useEffect } from 'react';



const TasksList = ({tasksList, getTasks, updateTask, deleteTask}) => {

  useEffect(() => {
    getTasks();
  }, []);

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
              onChange={updateTask}
              onDelete={deleteTask}
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
  updateTask: tasksActions.updateTaskAction,
  deleteTask: tasksActions.deleteTaskAction,
}

export default connect(mapState, mapDispatch)(TasksList);
