
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockdatabase = new firebasemock.MockFirebase();


export const mocksdk = new firebasemock.MockFirebaseSdk(
  (path) => {
    return path ? mockdatabase.child(path) : null
  },
  () => {
    return mockauth;
  },
  () => {
    return mockstorage;
  }
);

mockauth.autoFlush();
global.firebase = mocksdk;

import { singUpBttn, singInBttn, loginGoogle } from '../src/lib/firebase.js';


describe('singInBttn', () => {
  it('Deberia retornar el email: juanita@gmail.com', (done) => {
    singInBttn('juanita@gmail.com', '123456')
      .then(object => {
        expect(object.email).toBe('juanita@gmail.com')
        done()
      });
  });
});

describe('singUpBttn', () => {
  it('Deberia registrar el email ingresado', (done) => {
    singUpBttn('juanita2@gmail.com', 'abcd1234')
      .then((object) => {
        expect(object.email).toBe('juanita2@gmail.com')
        done()
      });
  });
});

