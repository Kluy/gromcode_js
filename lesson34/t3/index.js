const formElem = document.querySelector('.login-form');
const submitButtonElem = document.querySelector('.submit-button');


const submitForm = (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(formElem));
  console.log(formElem.reportValidity());
  if(formElem.reportValidity())
submitButtonElem.removeAttribute('disabled');
  console.log(data);
  console.log(report);
}



submitButtonElem.addEventListener('click', submitForm);

// const sendRquest = () => fetch(`https://api.github.com/users/${inputValue.value}`).then(response => response.json()).then(result => renderData(result));

// buttonInput.addEventListener('click', sendRquest);

// const renderData = (result) => {
//   const {avatar_url, name, location} = result;
//   avatarElem.src = avatar_url;
//   nameElem.textContent = name;
//   locationElem.textContent = location ? `from ${location}` : '';
// }