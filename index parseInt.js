const getParsedIntegers = (arr) => arr.map((elem) => Number.parseInt(elem));

const getParsedIntegersV2 = (arr) => arr.map((elem) => parseInt(elem));

const getParsedFloats = (arr) => arr.map((elem) => Number.parseFloat(elem));

const getParsedFloatsV2 = (arr) => arr.map((elem) => parseFloat(elem));

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

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
