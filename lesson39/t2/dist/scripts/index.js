import { initHandlers } from './handlers.js';
import { renderTasks } from './render.js';
document.addEventListener('DOMContentLoaded', function () {
  renderTasks();
  initHandlers();
});
var onStorageChange = function onStorageChange(event) {
  if (event.key !== 'tasksList') return;
  renderTasks();
};
window.addEventListener('storage', onStorageChange);