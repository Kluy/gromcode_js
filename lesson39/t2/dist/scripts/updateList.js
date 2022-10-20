import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import { renderTasks } from "./render.js";
import { deleteTask, getTasks, updateTask } from "./gateway.js";
export var updateList = function updateList(event) {
  var taskId = event.target.parentElement.dataset.id || event.target.dataset.id;
  if (event.target.classList.contains('list__item-delete-button')) {
    deleteTask(taskId).then(function () {
      return renderTasks();
    });
  } else {
    getTasks().then(function (result) {
      return result.find(function (elem) {
        return elem.id === taskId;
      });
    }).then(function (result) {
      result.done = !result.done;
      updateTask(result.id, result).then(function () {
        return renderTasks();
      });
    });
  }
};