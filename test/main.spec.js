// importamos la funcion que vamos a testear
import { singInBttn } from '../src/main.js';

describe(singInBttn(), () => {
  it('should be an object', () => {
    expect(singInBttn()).toBe('object');
  });
  it('...', () => {
    const mail = 'juanita@mail.com';
    expect(mail).toMatch(/\S+@\S+\.\S+/);
  });
  it('....', () => {
    const mail = 'juanitamail com';
    expect(mail).not.toMatch(/\S+@\S+\.\S+/);
  });
});
