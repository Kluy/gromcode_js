import { initHandlers } from './scripts/handlers';
import { renderTasks } from './scripts/render';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initHandlers();
});

const onStorageChange = (event) => {
  if (event.key !== 'tasksList') return;
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
