const reverseString = require('./index');

test('Returns a string reversed', () => {
  expect(reverseString('Octavio')).toBe('oivatcO');
});