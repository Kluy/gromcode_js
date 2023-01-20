import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { sortedTasksSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';
import {connect} from 'react-redux';
import { useEffect } from 'react';



const TasksList = ({tasksList, getTasks, updateTask, deleteTask, createTask}) => {

  useEffect(() => {
    getTasks();
  }, []);

    const sortedTasks = tasksList.sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput
          onCreate={createTask}
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
    tasksList: sortedTasksSelector(state),
  }
}

const mapDispatch = {
  getTasks: tasksActions.getTasksAction,
  updateTask: tasksActions.updateTaskAction,
  deleteTask: tasksActions.deleteTaskAction,
  createTask: tasksActions.createTaskAction,
}

export default connect(mapState, mapDispatch)(TasksList);
