import getSum, {getSquaredArray, getOddNumbers} from './calculator';

it('get squared numbers array', () => {
  expect(getSquaredArray([1,2,3])).toEqual([1,4,9]);
})

it('get odd numbers array', () => {
  expect(getOddNumbers([1,2,3])).toEqual([1,3]);
})

it('get sum', () => {
  expect(getSum(1,2)).toEqual(3);
})