var foo = require('src/foo');

describe('foo', () => {
  it('should have fn bar', () => {
    expect(typeof foo.bar).toBe('function');
  });
});