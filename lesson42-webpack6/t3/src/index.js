import { initHandlers } from './scripts/handlers.js';
import { renderTasks } from './scripts/render.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    initHandlers();
})

const onStorageChange = event => {
    if(event.key !== 'tasksList')
    return;
    renderTasks();
}

window.addEventListener('storage', onStorageChange);