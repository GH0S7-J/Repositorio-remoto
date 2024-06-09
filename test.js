const assert = require('chai').assert;
const app = require('./app');

describe('App', () => {
  it('debería saludar con "Hola Mundo!"', () => {
    assert.equal(app.saludar(), '¡Hola Mundo!');
  });
});