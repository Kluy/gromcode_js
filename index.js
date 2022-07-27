const getSquaredArray = arr => 
arr.map(elem => elem *= elem);

const getOddNumbers = arr => 
arr.filter(elem => elem % 2 !== 0);

console.log(getSquaredArray([1,2,3,4]));
console.log(getOddNumbers([1,2,3,4]));