'use strict';


/**
 * @return {object}
 */
const createArrayOfFunctions = (num) => {
  // put your code here

  if(!Number.isInteger(num) && num !== undefined)
  return null;

  const arr = [];

  for(let i = 0; i < num; i++){
    arr.push(function(){
      return i;
    })
  }

  return arr;

};

console.log(createArrayOfFunctions());
