const index = require('../index.js');

test('Primer test para index.js', () => {
    expect(index()).toEqual("Hola mundo");
});