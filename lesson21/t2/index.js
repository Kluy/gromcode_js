'use strict';

export const getTitleElement = () => {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
}

export const getInputElem = () => {
  const inputElem = document.querySelector('input[type=text]');
  console.dir(inputElem);
  return inputElem;
}
