const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Visit party', done: false },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const updateList = (event) => {
  const taskId = event.target.parentElement.dataset.id;
  const taskElem = document.querySelector(`[data-id='${taskId}']`);
  tasks.find((elem) => elem.text === taskElem.textContent).done = true;
  listElem.textContent = '';
  renderTasks(tasks);
}

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
      checkbox.addEventListener('change', updateList);
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

    tasksElems.reduce((acc, elem) => {
      elem.setAttribute('data-id', acc);
      acc++;
      return acc;
    }, 0);

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

const createTaskButton = document.querySelector('.create-task-btn');

const setTask = () => {
   const taskInput = document.querySelector('.task-input');
   const taskText = taskInput.value;
   taskText === '' ? undefined : tasks.push({text:taskText, done:false});
   listElem.textContent = '';
   taskInput.value = '';
   renderTasks(tasks);
  };

createTaskButton.addEventListener('click', setTask);