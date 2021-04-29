// importamos la funcion que vamos a testear
import {singInTemplate} from './src/lib/main.js';

describe('singInTemplate', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
