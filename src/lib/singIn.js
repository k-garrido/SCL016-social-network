export const singInTemplate = () => {
    const singIn = `
    <div id="page2">
    <p>Esta es tu red social de viajes por Chile. Comparte tus experiencias, recuerdos, recomendaciones y problemas, 
    para que asi  otros viajeros puedan planificar de mejor manera su travesia.</p>
       <h1>Iniciar sesión</h1>
       <form>
         <ul>
         <li>
           <label for="mail">Correo:</label>
           <input type="email" id="mail" name="user_mail">
         </li>
         <li>
          <label for="msg">Contraseña:</label>
          <input type="password" id="password" name="user_password"></input>
         </li>
         <input type="button" value="Iniciar sesión con Google">
         <input type="button" value = "Iniciar sesión">
         <p>O</p>
         <input type="button" value = "Registrate">
       </ul>
      </form>
     </div>
       `
       console.log("si funciona");
       return singIn;
     };