'use strict';

export const asyncCalculator = numbr => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(numbr);
  }, 500)
});

asyncCalculator(5).then(data => {
  console.log(`Initial value: ${data}`);
 return new Promise((resolve) => {
  setTimeout(() => {
    const result = data * data;
    resolve(result);
  }, 500)
})}).then(data => {
  console.log(`Squared value: ${data}`);
  console.log(`Doubled value: ${data * 2}`)
})




// 'use strict';

// export const asyncCalculator = numbr => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`Initial value: ${numbr}`);
//     resolve(numbr);
//   }, 500)
// }).then(data => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = data * data;
//     console.log(`Squared value: ${result}`);
//     resolve(result);
//   }, 500)
// })).then(data => console.log(`Doubled value: ${data * 2}`));
