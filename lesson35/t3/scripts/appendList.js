const listElem = document.querySelector('.repo-list');

export const createListElem = (arr) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('repo-list__item')
  const reposList = arr.map(elem => {
    listItemElem.textContent = elem.name;
    elem = listItemElem.outerHTML;
    return elem;
  }).join('');
  listElem.innerHTML = reposList;
}
