'use strict';

export const asyncCalculator = numbr => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Initial value: ${numbr}`);
    resolve(numbr);
  }, 500)
}).then(data => new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = data * data;
    console.log(`Squared value: ${result}`);
    resolve(result);
  }, 500)
})).then(data => console.log(`Doubled value: ${data * 2}`));