import {createSelector} from 'reselect';

export const tasksSelector = (state) => {
    return state.tasks.tasksList;
}

export const sortedTasksSelector = createSelector(
    [tasksSelector],
    (tasks) => {
        return tasks.sort((a, b) => a.done - b.done)
    })