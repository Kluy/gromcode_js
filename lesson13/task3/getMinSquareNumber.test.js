import getMinSquareNumbers from './getMinSquareNumber';

it('should get null if parameter is an empty array', () => {
    expect(getMinSquareNumbers([])).toEqual(null);
})

it('should get null if parameter is a string', () => {
    expect(getMinSquareNumbers('text')).toEqual(null);
})

it('should get modulo min number', () => {
    expect(getMinSquareNumbers('text')).toEqual(null);
})