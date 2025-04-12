const isUpperCase = require('../utils/esmayuscula');

  test('devuelve true para una palabra completamente en mayúsculas', () => {
    expect(isUpperCase('HOLA')).toBe(true);
  });

  test('devuelve false para una palabra en minúsculas', () => {
    expect(isUpperCase('hola')).toBe(false);
  });

  test('devuelve false para una mezcla de mayúsculas y minúsculas', () => {
    expect(isUpperCase('Hola')).toBe(false);
  });

  test('devuelve true para una frase con mayúsculas y espacios', () => {
    expect(isUpperCase('HOLA MUNDO')).toBe(true);
  });

  test('devuelve true para una cadena vacía', () => {
    expect(isUpperCase('')).toBe(true);
  });

  test('devuelve true para una cadena con números y símbolos', () => {
    expect(isUpperCase('1234!?')).toBe(true);
  });

  test('devuelve false para una cadena con letras minúsculas entre símbolos', () => {
    expect(isUpperCase('HOLA mundo!')).toBe(false);
  });

  test('devuelve true para una sola letra mayúscula', () => {
    expect(isUpperCase('A')).toBe(true);
  });

  test('devuelve false para una sola letra minúscula', () => {
    expect(isUpperCase('a')).toBe(false);
  });