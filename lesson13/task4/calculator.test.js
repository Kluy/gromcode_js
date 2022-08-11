import {calc} from './calculator';

it('should sum', () => {
  expect(calc('1 + 2')).toEqual('1 + 2 = 3');
})

it('should subtract', () => {
  expect(calc('1 - 2')).toEqual('1 - 2 = -1');
})

it('should divide', () => {
  expect(calc('1 / 2')).toEqual('1 / 2 = 0.5');
})

it('should multiplicate', () => {
  expect(calc('4 * 2')).toEqual('4 * 2 = 8');
})

it('should return null if parameter is a not string', () => {
  expect(calc(17)).toEqual(null);
})
