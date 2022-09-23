export const sum = number => {
  return number === 1 ? 1 : number + sum(number - 1);
}