const Calculator = require('./index.js');
const calculator = new Calculator();

describe('calculator', () => {
  test('3 + 5 is equal to 8', () => {
    expect(calculator.add(3,5)).toBe(8);
  });

  test('10 - 6 is equal to 4', () => {
    expect(calculator.substract(10,6)).toBe(4);
  });

  test('20 / 4 is equal to 5', () => {
    expect(calculator.divide(20,4)).toBe(5);
  });

  test('3 * 7 is equal to 21', () => {
    expect(calculator.multiplly(3, 7)).toBe(21);
  });
});