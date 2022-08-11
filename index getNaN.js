const getFiniteNumbers = (arr) => arr.filter((elem) => Number.isFinite(elem));

const getFiniteNumbersV2 = (arr) => arr.filter((elem) => isFinite(elem));

const getNaN = (arr) => arr.filter((elem) => Number.isNaN(elem));

const getNaNV2 = (arr) => arr.filter((elem) => isNaN(elem));

const getIntegers = (arr) => arr.filter((elem) => Number.isInteger(elem));

const arr = [
  undefined,
  NaN,
  'string',
  1 / 3,
  Infinity,
  -Infinity,
  0,
  -0,
  null,
  '17',
  18,
  -15,
  20,
  20 / 3,
];

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));
