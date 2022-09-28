export const delay = (number) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(), number);
  })
  return promise;
}