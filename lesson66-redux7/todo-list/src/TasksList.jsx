import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { createTask, deleteTask, fetchData, updateTask } from './gateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.renderTasks();
  }

  renderTasks = () => {
    fetchData().then((result) => this.setState({ tasks: result }));
  };

  handleTaskUpdate = (taskId) => {
    const { done, text } = this.state.tasks.find((elem) => elem.id === taskId);
    const updatedTask = { text, done: !done };

    updateTask(taskId, updatedTask).then((result) => this.renderTasks());
  };

  handleTaskCreate = () => {
    const newTask = { text: this.state.input, done: false };
    this.setState({ input: '' });
    createTask(newTask).then((result) => this.renderTasks());
  };

  handleTaskDelete = (taskId) => {
    deleteTask(taskId).then((result) => this.renderTasks());
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const sortedTasks = this.state.tasks.sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput
          input={this.state.input}
          onCreate={this.handleTaskCreate}
          onChange={this.handleInputChange}
        />
        <ul className="list">
          {sortedTasks.map((elem) => (
            <Task
              onChange={this.handleTaskUpdate}
              onDelete={this.handleTaskDelete}
              key={elem.id}
              {...elem}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
