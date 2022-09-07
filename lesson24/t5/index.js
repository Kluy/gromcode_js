const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Visit party', done: false },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => { 
  const tasksElems = tasksList
  .sort((a, b) => a.done - b.done)
  .map(({ text, done }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkbox, text);
    
    return listItemElem;
  });
  
  tasksElems.reduce((acc, elem) => {
    elem.firstChild.setAttribute('data-id', acc);
    acc++;
      return acc;
    }, 0);

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

const updateTask = (event) => {
  
  let taskId = event.target.dataset.id;

  if(taskId === undefined){
    taskId = event.target.firstChild.dataset.id;
  }

  tasks[taskId].done = !tasks[taskId].done;
  
  listElem.textContent = '';
  renderTasks(tasks);
}

listElem.addEventListener('click', updateTask);

const createTaskButton = document.querySelector('.create-task-btn');

const addNewTask = () => {
  const taskInput = document.querySelector('.task-input');
  const taskText = taskInput.value;
  taskText === '' ? undefined : tasks.push({text:taskText, done:false});
  taskInput.value = '';
  listElem.textContent = '';
  renderTasks(tasks); 
};

createTaskButton.addEventListener('click', addNewTask);