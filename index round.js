'use strict';

/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = (num) => {
  // put your code here

  return [
    Math.floor(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.round(num * 100) / 100,
    +num.toFixed(2),
  ];
};

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

console.log(multiRound(11.12556));
console.log(multiRound(-11.12556));
console.log(multiRound(6.112));
console.log(multiRound(-6.112));
