import "core-js/modules/es.promise.js";
import "core-js/modules/es.json.stringify.js";
const baseUrl = 'https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/tasks';
export const getTasks = () => fetch(baseUrl).then(response => response.json());
export const updateTask = (taskId, task) => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(task)
}).then(() => console.log("task ".concat(taskId, " updated")));
export const addTask = task => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(task)
}).then(() => console.log("task created"));
export const deleteTask = taskId => fetch("".concat(baseUrl, "/").concat(taskId), {
  method: 'DELETE'
}).then(() => console.log("task ".concat(taskId, " deleted")));