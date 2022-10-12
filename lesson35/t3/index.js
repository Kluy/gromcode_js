const nameInputElem = document.querySelector('.name-form__input');
const buttonElem = document.querySelector('.name-form__btn');
const avatarElem = document.querySelector('.user__avatar');
const nameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');
const listElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');

const createListElem = (arr) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('repo-list__item')
  arr.map(elem => {
    listItemElem.textContent = elem.name;
    elem = listItemElem.outerHTML;
    listElem.innerHTML += elem;
  });
}

const sendRequest = () => {
  spinnerElem.classList.toggle('spinner_hidden');
  fetch(`https://api.github.com/users/${nameInputElem.value}`)
  .then(response => response.json())
  .then(result => renderData(result));
}

const sendReposRequest = (url) => fetch(`${url}`)
.then(response => response.json())
.then(result => createListElem(result));

const renderData = (result) => {
  const {avatar_url, name, location, repos_url} = result;
  avatarElem.src = avatar_url;
  nameElem.textContent = name;
  locationElem.textContent = location ? `from ${location}` : '';
  sendReposRequest(repos_url);
}

buttonElem.addEventListener('click', sendRequest);