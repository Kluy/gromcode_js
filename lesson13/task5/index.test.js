import {reverseArray, withdraw, getAdults} from './index'

it('should get null if parameter is a number', () => {
  expect(reverseArray(17)).toBeNull();
})

it('should get null if parameter is a string', () => {
  expect(reverseArray('string')).toBeNull();
})

it('should get reversed array', () => {
  expect(reverseArray([1,2,3,4,5])).toEqual([5,4,3,2,1]);
})

it('should get -1', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(-1);
})

it('should get substracted balance', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)).toEqual(37);
})

it('should get {}', () => {
  expect(getAdults({})).toEqual({});
})

it('should get adults older 18', () => {
  expect(getAdults({Andrey: 7, Ann: 56, 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({ Ann: 56, 'John Doe': 19, Bob: 18});
})