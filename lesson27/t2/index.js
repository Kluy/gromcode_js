const counter = document.querySelector('.counter');
const counterValueElement = document.querySelector('.counter__value');

const onCounterChange = event => {
    if(!event.target.classList.contains('counter__button'))
    return;

    const action = event.target.dataset.action;

    const previousValue = Number(counterValueElement.textContent);

    const newValue = action === 'decrease' ?  previousValue - 1 : previousValue + 1;
    
    counterValueElement.textContent = newValue;

    localStorage.setItem('counter', newValue);
}

counter.addEventListener('click', onCounterChange);

const onStorageChange = event => {
    counterValueElement.textContent = event.newValue;
}

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
    counterValueElement.textContent = localStorage.getItem('counter') || 0;

}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);