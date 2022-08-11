it('17 равно 17', () => {
  expect(17).toEqual(17);
})

it('18 неравно 17', () => {
  expect(18).not.toEqual(17);
})

const getEvenNumbers = arr =>
arr.filter(elem => elem % 2 ===0)

console.log(getEvenNumbers([1,2,3,4,5,6]));

it('get even numbers array', () => {
  expect(getEvenNumbers([1,2,3,4,5,6])).toEqual([2,4,6]);
})