const formElem = document.querySelector('.login-form');

const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');

const emailError = document.querySelector('.error-text_email');
const passwordError = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');

const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const onEmailChange = (event) => {
  emailError.textContent = [isRequired, isEmail]
    .map((elem) => elem(event.target.value))
    .filter((errorText) => errorText)
    .join(', ');
};

const onPasswordChange = (event) => {
  passwordError.textContent = isRequired(event.target.value);
};

emailElement.addEventListener('input', onEmailChange);
passwordElement.addEventListener('input', onPasswordChange);

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [name, value]) => ({ ...acc, [name]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
