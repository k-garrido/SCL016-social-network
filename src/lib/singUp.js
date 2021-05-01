export const singUpTemplate = () => {
  const singUp = `
  <div id="page2">
   <formclass="inputForm">
      <ul class="principalUl">
       <h1 class="title1">Regístrate</h1>
       <input class="googleInpt" type="button" value="Regístrate con Google">
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
    `;
  return singUp;
};
