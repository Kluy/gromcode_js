import { createTask, deleteTask, fetchTasks, updateTask } from "./tasks.gateway";
import { tasksSelector } from "./tasks.selectors";

export const GET_TASK = 'TASKS/GET_TASKS';

export const saveTasksAction = (tasks) => {
    return {
        type: GET_TASK,
        payload: {
            tasks,
        }
    }
}

export const getTasksAction = () => {
    return function (dispatch) {
        fetchTasks().then(result => dispatch(saveTasksAction(result)));
    }
}

export const updateTaskAction = (taskId) => {
    return function (dispatch, getState) {
        const state = getState();
        const tasksList = tasksSelector(state);
        const { done, text } = tasksList.find((elem) => elem.id === taskId);
        const updatedTask = { text, done: !done };

        updateTask(taskId, updatedTask).then(result => dispatch(getTasksAction()));
    }
}

export const deleteTaskAction = (taskId) => {
    return function (dispatch) {
        deleteTask(taskId).then(() => dispatch(getTasksAction()));
    }
}

export const createTaskAction = (text) => {
    return function (dispatch) {
         const newTask = { text, done: false };
         createTask(newTask).then(() => dispatch(getTasksAction()));
    }
}