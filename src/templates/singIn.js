import { singInBttn, loginGoogle } from '../lib/firebase.js';
import { changeHash, errorAD } from '../lib/index.js';

export const singInTemplate = () => {
  const div1 = document.createElement('div');
  const singIn = `
  <header id="principalHeader">
    <img src="./images/Logo.png" id="logoPage1">
  </header>
  <div id="page1">
    <p class="pageText">Esta es tu red social de viajes por Chile. Comparte tus experiencias, recuerdos,
      recomendaciones y problemas,
      para que así otros viajeros puedan planificar de mejor manera su travesía.</p>
    <h1 class="title1" >Iniciar sesión</h1>
    <form class="inputForm" autocomplete="off">
      <ul class="principalUl">
        <li id="errorMesssage"></li>
        <li class="liInput1">
          <label class="emailAndPassword" for="mail">Correo:</label>
          <input class="inputSingIn" type="email" id="mail" name="user_mail">
        </li>
        <li class="liInput1">
          <label class="emailAndPassword" for="msg">Contraseña:</label>
          <input class="inputSingIn" type="password" id="password" name="user_password" >
        </li>
        <input class="googleInpt" id="googleBttn" type="button" value="Iniciar sesión con Google">
        <input class="bttn" id="singInBttn" type="button" value="Iniciar sesión">
        <p id="or">O</p>
        <a href="#/Registrate" id="ancla"><input class="bttn" id="register"type="button" value="Regístrate"></a>
      </ul>
    </form>  
  </div>
   <footer class="footer1">
    <p class="footerText">Desarrolladoras: Katherinne Garrido <br> Gisela Donoso</p>
    </footer> 
    `;
  div1.innerHTML = singIn;

  // Dandole funcionalidad al boton de iniciar sesion.
  div1.querySelector('#singInBttn').addEventListener('click', () => {
    const mail = div1.querySelector('#mail').value;
    const password = div1.querySelector('#password').value;
    singInBttn(mail, password)
      .then(() => {
        changeHash('#/Muro');
      }).catch((error) => {
        const errorMessage = error.message;
        const errorLi = div1.querySelector('#errorMesssage');
        errorLi.innerHTML = '';
        errorLi.appendChild(errorAD(errorMessage));
      });
  });
  // Dandole funcionalidad al boton de iniciar sesion con Google.
  div1.querySelector('#googleBttn').addEventListener('click', loginGoogle);
  return div1;
};
