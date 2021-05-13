// Funcion para mostrar los mensajes de error
export const errorAD = (error) => {
  const errorP = document.createElement('p');
  errorP.id = 'PrintingErrorMessage';
  switch (error) {
    case 'The email address is badly formatted.':
      errorP.innerHTML = 'Correo inválido.';
      break;
    case 'The password is invalid or the user does not have a password.':
      errorP.innerHTML = 'Contraseña inválida.';
      break;
    case 'There is no user record corresponding to this identifier. The user may have been deleted.':
      errorP.innerHTML = 'Usuario no registrado.';
      break;
    case 'The password must be 6 characters long or more.':
      errorP.innerHTML = 'La contraseña debe tener más de 6 caracteres.';
      break;
    case 'The email address is already in use by another account.':
      errorP.innerHTML = 'El correo ya está siendo usado en otra cuenta.';
      break;
    default:
      errorP.innerHTML = 'Error desconocido';
      break;
  }
  return errorP;
};

// Funcion para cambiar el hash.
export const changeHash = (hash) => {
  location.hash = hash;
};
