
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

};
export const errorAD = (error) => {
  const errorLi=document.getElementById("errorMesssage");
  errorLi.innerHTML=""
  console.log (errorLi)
  const errorP=document.createElement("p")
  errorP.id = "PrintingErrorMessage"
  console.log (errorP)
  switch (error) {
    case "The email address is badly formatted.":
      errorP.innerHTML ="Correo invalido."
      break;
    case "The password is invalid or the user does not have a password.":
      errorP.innerHTML ="Contraseña invalida."
      break;
    case "There is no user record corresponding to this identifier. The user may have been deleted.":
      errorP.innerHTML ="Usuario no registrado."
      break;
    case "The password must be 6 characters long or more.":
      errorP.innerHTML ="La contraseña debe tener mas de 6 caracteres."
      break;
    case "The email address is already in use by another account.":
      errorP.innerHTML ="El correo ya esta siendo usado en otra cuenta."
      break;
    default:
      console.log ("No hay ningun error")
      break;
  };
  errorLi.appendChild(errorP)
  return errorP;
};
