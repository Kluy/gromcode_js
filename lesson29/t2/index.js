'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  // put your code here
  let i = count;
  console.log('Ping');
  const intervalID = setInterval(() => {
    if(--i > 0){
      console.log('Ping')
    } else {
      clearInterval(intervalID);
    }
  }, period);
};

// examples
// pinger(5, 100); // makes 5 writes with 100 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval