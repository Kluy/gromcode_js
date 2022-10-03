export const asyncSum = (...asyncNumber) => 
  Promise.all(asyncNumber)
  .then(result => result
    .filter(elem => !isNaN(elem))
    .reduce((acc, num) => acc + Number(num), 0))
  .catch(() => Promise.reject(new Error('Can\'t calculate')));