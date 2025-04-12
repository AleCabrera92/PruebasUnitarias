const palindromo = require('../utils/palindromo');

test('invierte una palabra simple', () => {
    expect(palindromo('hola')).toBe('aloh');
});

test('invierte una palabra con mayúsculas', () => {
    expect(palindromo('Hola')).toBe('aloH');
});

test('invierte una frase con espacios', () => {
    expect(palindromo('hola mundo')).toBe('odnum aloh');
});

test('invierte una cadena vacía', () => {
    expect(palindromo('')).toBe('');
});

test('invierte una palabra palíndroma', () => {
    expect(palindromo('oso')).toBe('oso');
});

test('invierte una cadena con números', () => {
    expect(palindromo('abc123')).toBe('321cba');
});

test('invierte una cadena con símbolos', () => {
    expect(palindromo('¡Hola!')).toBe('!aloH¡');
});
