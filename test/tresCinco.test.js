import { describe, expect, it, test } from "vitest"

// Escribir una función que al pasarle un número:
// _ Muestre "fizz" si es múltiplo de 3.
// _ Muestre "buzz" si es múltiplo de 5.
// _ Muestre "fizzbuzz" si es múltiplo de 3 y 5.
// _ Muestre el número sino es múltiplo de los anteriores.

// Escribir una función que al pasarle un número:
// _ Muestre "tres" si es múltiplo de 3.
// _ Muestre "cinco" si es múltiplo de 5.
// _ Muestre "tresCinco" si es múltiplo de 3 y 5.
// _ Muestre el número sino es múltiplo de los anteriores.

const multiTresCinco = (number) => {
  if (typeof number !== 'number') throw new Error('El parámetro proporcionado no es válido');
  if (Number.isNaN(number)) throw new Error('El parámetro proporcionado no es válido, debe ser un número y no infinito. Está recibiendo: ' + number);
  // if(number == 1) return 1
  // if(number == 2) return 2
  if(number % 3 === 0 && number % 5 === 0) return 'tresCinco'
  if(number % 3 == 0) return 'Tres'
  if(number % 5 == 0) return 'Cinco'
  // if(number == 3) return 'Tres'
  return number

}

describe('multiTresCinco', () => {
  // Esta es una función para inicar

  // it('Debería ser una función', () => {
  //   expect(typeof multiTresCinco).toBe('function')
  // });

  // test('Debería fallar sino proporciona un número para el parámetro', () => {
  //     expect(typeof multiTresCinco).toBe('function')
  // })

  test('Debería fallar sino proporciona un número para el parámetro', () => {
    expect(() => multiTresCinco()).toThrow()
  })

  test('Debería fallar sino proporciona un número para el parámetro y mostrar mensaje de error', () => {
    expect(() => multiTresCinco()).toThrow('El parámetro proporcionado no es válido')
  })

  test('Debería fallar sino proporciona un número para el parámetro y mostrar mensaje de error y el tipo de variable', () => {
    expect(() => multiTresCinco(NaN)).toThrow('El parámetro proporcionado no es válido, debe ser un número y no infinito. Está recibiendo: ')
  })

  test('Debería devolver 1 si el número proporcionado es 1', () => {
    expect(multiTresCinco(1)).toBe(1)
  })

  it('Debería devolver 2 si el número proporcionado es 2', () => {
    expect(multiTresCinco(2)).toBe(2)
  })

  test('Debería devolver 2 si el número proporcionado es 2', () => {
    expect(multiTresCinco(3)).toBe('Tres')
  })

  test('Debería devolver 2 si el número proporcionado es multiplo de 3', () => {
    expect(multiTresCinco(3)).toBe('Tres')
    expect(multiTresCinco(6)).toBe('Tres')
    expect(multiTresCinco(9)).toBe('Tres')
    expect(multiTresCinco(12)).toBe('Tres')
  })

  test('Debería devolver cinco si el número proporcionado es multiplo de 5', () => {
    expect(multiTresCinco(5)).toBe('Cinco')
    expect(multiTresCinco(10)).toBe('Cinco')
    expect(multiTresCinco(20)).toBe('Cinco')
  })

})