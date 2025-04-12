const sum = require('../utils/suma');

describe('calculator', () => {
  test.each([
    [3, 1, 4],
    [-4, 1, -3],
    [0, 1, 1],
    [-4, 0, -4],
    [0, 0, 0],
  ])('%i + %i should return %i', (firstValue, secondValue, expectedResult) => {
    expect(sum(firstValue, secondValue)).toBe(expectedResult);
  });
});