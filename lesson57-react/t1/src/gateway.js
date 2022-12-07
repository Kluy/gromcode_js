const baseUrl =
  'https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/tasks-react/';

export const updateTask = (taskId, updatedTask) =>
  fetch(`${baseUrl}${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTask),
  }).then((response) => {
    if (!response.ok) throw new Error('Task didn"t updated');
  });

export const createTask = (newTask) =>
  fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newTask),
  }).then((response) => {
    if (!response.ok) throw new Error('Task didn"t created');
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}${taskId}`, { method: 'DELETE' }).then((response) => {
    if (!response.ok) throw new Error('Task didn"t deleted');
  });

export const fetchData = () =>
  fetch(`${baseUrl}`)
    .then((response) => {
      if (response.ok) return response.json();
    });