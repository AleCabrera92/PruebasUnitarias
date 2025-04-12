const sum = require('../utils/suma');

test('sumar 1 + 2', () => {
    expect(sum(1,2)).toBe(3);
})

test('sumar 1 + -2', () => {
    expect(sum(1,-2)).toBe(-1);
})

test('sumar 1 + 0.5', () => {
    expect(sum(1,0.5)).toBe(1.5);
})

test('sumar 9007199254740991 + 1', () => {
    expect(sum(9007199254740991,1)).toBe(9007199254740992);
})