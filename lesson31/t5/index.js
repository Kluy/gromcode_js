export const delay = (number) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), number);
  })
  return promise;
}