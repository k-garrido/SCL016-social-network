export const singUpTemplate = () => {
 const singUp = `
 <div id="page1">
    <h1>Registrate</h1>
    <input type="button" value="Registrare con Google">
    <h2>O ingresa tu:</h2>
    <form>
      <ul>
      <li>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="user_name">
      </li>
      <li>
        <label for="mail">Correo:</label>
        <input type="email" id="mail" name="user_mail">
      </li>
      <li>
       <label for="msg">Contraseña:</label>
       <input type="password" id="password" name="user_password"></input>
      </li>
      <input type="button" value = "Registrarme" >
    </ul>
   </form>
  </div>
    `
    return singUp;
  };

   