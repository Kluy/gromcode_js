export const createButton = (buttonText) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = buttonText;
    document.querySelector('body').append(buttonElement);
}