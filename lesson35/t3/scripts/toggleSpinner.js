const spinnerElem = document.querySelector('.spinner');

export const toggleSpinner = () => {
  spinnerElem.classList.toggle('spinner_hidden');
}