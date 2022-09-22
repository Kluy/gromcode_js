import { initHandlers } from './handlers.js';
import { renderTasks } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    initHandlers();
})

const onStorageChange = event => {
    if(event.key !== 'tasks')
    return;
    
    renderTasks();
}

window.addEventListener('storage', onStorageChange);