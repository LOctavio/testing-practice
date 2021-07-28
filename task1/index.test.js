const stringLength = require('./index');

test('Returns lenght of string if string lenth is more tan 1 and less than 10', () => {
  expect(stringLength('Octavio')).toBe(7);
});

test('Throw error if string lenth is less tan 1 and more than 10', () => {
  expect(stringLength('microverse')).toBeUndefined();
});

