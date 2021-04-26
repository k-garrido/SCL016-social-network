export const singUpTemplate = () => {
 const singUp = `
 <div id="page2">
    <h1 class="title1">Regístrate</h1>
    <input type="button" value="Regístrate con Google">
    <h2>O ingresa tu:</h2>
    <form>
      <ul>
      <li class="liInput1">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="user_name">
      </li>
      <li class="liInput1">
        <label for="mail">Correo:</label>
        <input type="email" id="mail" name="user_mail">
      </li>
      <li>
       <label for="msg">Contraseña:</label>
       <input type="password" id="password" name="user_password"></input>
      </li>
      <input type="button" value="Registrarme" id="singUpBttn" >
    </ul>
   </form>
  </div>
    `
    return singUp;
  };

   