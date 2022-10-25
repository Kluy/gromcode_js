const baseUrl = 'https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/tasks';

export const getTasks = () => fetch(baseUrl).then((response) => response.json());

export const updateTask = (taskId, task) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(task),
}).then(() => console.log(`task ${taskId} updated`)); // eslint-disable-line no-console

export const addTask = (task) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(task),
}).then(() => console.log('task created')); // eslint-disable-line no-console

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
}).then(() => console.log(`task ${taskId} deleted`)); // eslint-disable-line no-console
