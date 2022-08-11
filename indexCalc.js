'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const calc = (str) => {
  // put your code here

  const [a, operator, b] = str.split(' ');

  let result;

  switch (operator) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }

  return `${str} = ${result}`;
};

// examples

console.log(calc('1 + 2'));
console.log(calc('1 - 2'));
console.log(calc('1 * 2'));
console.log(calc('1 / 2'));
