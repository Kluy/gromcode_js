/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (a) => {
  // put you code here
  return new Promise(resolve => resolve(a));
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
