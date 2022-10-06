const avatarElem = document.querySelector('.user__avatar');
const nameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');
const buttonInput = document.querySelector('.name-form__btn');
const inputValue = document.querySelector('.name-form__input');

const sendRquest = () => fetch(`https://api.github.com/users/${inputValue.value}`).then(response => response.json()).then(result => renderData(result));

buttonInput.addEventListener('click', sendRquest);

const renderData = (result) => {
  const {avatar_url, name, location} = result;
  avatarElem.src = avatar_url;
  nameElem.textContent = name;
  locationElem.textContent = location ? `from ${location}` : '';
}