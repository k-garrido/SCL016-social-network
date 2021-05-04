import { errorAD } from './index.js';

// Ingreso sesión usuario
export const singInBttn = () => {
  const mail = document.getElementById('mail').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(mail, password).then((userCredential) => {
    //Signed in
    const user = userCredential.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    errorAD(errorMessage)    
  });
};

// Registo del usuario
export const singUpBttn= (mail2, password2) =>{
  firebase.auth().createUserWithEmailAndPassword(mail2, password2).then((userCredential) => {
    // Signed in
    const user = userCredential.user; 
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log (errorMessage)
  });
}

// Login con Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    // ...
    });
};

// Creando el observador
 export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log('existe usuario activo');
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      console.log('No existe usuario activo');
    }
  });
};

//Firestore, creando coleccion
export const firestoreCollection = (titlePost,contentPost,classPost,region)=>{
  const database = firebase.firestore();
  const savePost= (titlePost,contentPost,classPost,region) => {
    database.collection('posts').doc().set({
      title: titlePost,
      content: contentPost,
      typePost: classPost,
      regionPost: region
    })
  };
  return savePost(titlePost,contentPost,classPost,region)
}

