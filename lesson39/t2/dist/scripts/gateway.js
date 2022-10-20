import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
var baseUrl = 'https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/tasks';
export var getTasks = function getTasks() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
};
export var updateTask = function updateTask(taskId, task) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(task)
  }).then(function () {
    return console.log("task ".concat(taskId, " updated"));
  });
};
export var addTask = function addTask(task) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(task)
  }).then(function () {
    return console.log("task created");
  });
};
export var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  }).then(function () {
    return console.log("task ".concat(taskId, " deleted"));
  });
};