import { wallet } from './index';

it('should get max', () => {
  expect(wallet.getMax(1, 2, 3)).toEqual(3);
});

it('should get min', () => {
  expect(wallet.getMin(-1, 2, 3)).toEqual(-1);
});
