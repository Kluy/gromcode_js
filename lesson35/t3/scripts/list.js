const listElem = document.querySelector('.repo-list');

export const appendList = (arr) => {
  const reposList = arr.map(({name}) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('repo-list__item')
    listItemElem.textContent = name;
    return listItemElem;
  });
  listElem.append(...reposList);
}

export const clearList = () => {
  listElem.innerHTML = '';
}
