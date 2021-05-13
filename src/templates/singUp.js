import { singUpBttn, loginGoogle } from '../lib/firebase.js';
import { errorAD, changeHash } from '../lib/index.js';

export const singUpTemplate = () => {
  const div2 = document.createElement('div');
  const singUp = `
  <header class="headerSecondary">
    <img src="./images/Logo.png" class="logo">
  </header>
  <div id="page2">
   <formclass="inputForm">
      <ul class="principalUl">
       <h1 class="title1">Regístrate</h1>
       <li id="errorMessage2"></li>
       <input class="googleInpt" id="googleBttn2" type="button" value="Regístrate con Google">
       <p>O ingresa tu:</p>
        <li class="liInput1">
          <label for="name">Nombre:</label>
          <input class="inputSingUp" type="text" id="name2" name="user_name">
        </li>
        <li class="liInput1">
          <label for="mail">Correo:</label>
          <input class="inputSingUp" type="email" id="mail2" name="user_mail">
        </li>
       <li class="liInput1">
        <label for="msg">Contraseña:</label>
        <input class="inputSingUp" type="password" id="password2" name="user_password"></input>
       </li>
      <input class="bttn" type="button" value="Registrarme" id="singUpBttn" >
    </ul>
    </form>
     
  </div>
  <footer class="footer1">
  <p class="footerText">Desarrolladoras: Katherinne Garrido <br> Gisela Donoso</p>
  </footer>
    `;
  div2.innerHTML = singUp;

  // Dandole funcionalidad al boton de registrarse.
  div2.querySelector('#singUpBttn').addEventListener('click', () => {
    const mail2 = div2.querySelector('#mail2').value;
    const password2 = div2.querySelector('#password2').value;
    singUpBttn(mail2, password2)
      .then(() => {
        changeHash('#/IniciarSesion');
      }).catch((error) => {
        const errorMessage = error.message;
        const errorLi2 = div2.querySelector('#errorMessage2');
        errorLi2.innerHTML = '';
        errorLi2.appendChild(errorAD(errorMessage));
      });
  });
  // Dandole funcionalidad al boton de registrate con Google.
  div2.querySelector('#googleBttn2').addEventListener('click', loginGoogle);
  return div2;
};
