const capitalize = require('./index.js');

test('returns string with first charcter capitalized', () => {
  expect(capitalize('octavio')).toBe('Octavio');
});