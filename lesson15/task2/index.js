export const createCalculator = () => {
  // put your code here
  let result = 0;
  const add = (num) => (result += num);
  const decrease = (num) => (result -= num);
  const reset = () => (result = 0);
  const getMemo = () => result;
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc1 = createCalculator();
const calc2 = createCalculator();

console.log(calc1.add(4));
console.log(calc2.add(4));
console.log(calc2.decrease(2));
console.log(calc1.getMemo());
console.log(calc2.reset());
