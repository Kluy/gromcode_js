const formElem = document.querySelector('.login-form');
const submitButtonElem = document.querySelector('.submit-button');

const validateForm = () => {
  if(formElem.reportValidity())
  submitButtonElem.removeAttribute('disabled');
}

const submitForm = (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(formElem));

  fetch('https://633ecd660dbc3309f3bda154.mockapi.io/api/v1/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  }).then(response => alert(response.json()));
  formElem.reset();
}

formElem.addEventListener('input', validateForm);
formElem.addEventListener('submit', submitForm);