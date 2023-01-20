import { fetchTasks } from "./tasks.gateway";

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