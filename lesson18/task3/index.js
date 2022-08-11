//put your code here
export const sumOfSquares = (...args) => {
  return [...args].reduce((acc, elem) => {
    return elem ** 2 + acc;
  }, 0);
};
