'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const splitText = (text, num = 10) => {
  // put your code here
  if (typeof text !== "string") return null;

  const arr = [];
  let start = 0;
  let end = num;
  while(true){
    const chunk = text.substring(start, end);
    if (chunk.length === 0) break;
    arr.push(chunk[0].toUpperCase() + chunk.slice(1));
    start += num;
    end += num;
  }

  return arr.join('\n');

};
// examples

console.log(splitText('sfsdfsgfdgsdfsdfsdgfdgdfgfdgds', 4));