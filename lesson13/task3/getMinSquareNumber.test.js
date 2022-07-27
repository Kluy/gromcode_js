import getMinSquareNumbers from './getMinSquareNumber';

it('should get null if parameter is an empty array', () => {
    expect(getMinSquareNumbers([])).toEqual(null);
})

it('should get null if parameter is a string', () => {
    expect(getMinSquareNumbers('text')).toEqual(null);
})

it('should get min modulo number', () => {
    expect(getMinSquareNumbers([-777, 3, -2, 6, 45, -20])).toEqual(4);
})