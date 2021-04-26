export const singInTemplate = () => {
const singIn = `
  <div id="page1">
    <p id="pageDescription" >Esta es tu red social de viajes por Chile. Comparte tus experiencias, recuerdos,
      recomendaciones y problemas,
      para que así otros viajeros puedan planificar de mejor manera su travesía.</p>
    <h1 class="title1" >Iniciar sesión</h1>
    <form id="inputForm">
      <ul id="principalUl">
        <li class="liInput1">
          <label class="emailAndPassword" for="mail">Correo:</label>
          <input class="inputSingIn" type="email" id="mail2" name="user_mail">
        </li>
        <li class="liInput1">
          <label class="emailAndPassword" for="msg">Contraseña:</label>
          <input class="inputSingIn" type="password" id="password2" name="user_password"></input>
        </li>
        <input type="button" value="Iniciar sesión con Google">
        <input id="singInBttn" type="button" value="Iniciar sesión">
        <p>O</p>
        <input type="button" value="Regístrate">
      </ul>
    </form>
  </div>
  `
return singIn;
};