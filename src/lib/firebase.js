
// Ingreso sesión usuario
export const singInBttn = (mail, password) =>
  firebase.auth().signInWithEmailAndPassword(mail, password)

// Registo del usuario
export const singUpBttn = (mail2, password2) =>
  firebase.auth().createUserWithEmailAndPassword(mail2, password2)

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
 export const activeUser = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback('#/Muro')
    console.log ("usuario activo")
    } else {
      callback('#/IniciarSesion')
      console.log ("usuario no activo")
    }
  });
};
//Funcion para desconectarse 
export const signOut = () => firebase.auth().signOut();

//Firestore, creando coleccion
export const savePost = (titlePost,contentPost,classPost,region) =>{
    return firebase.firestore().collection('posts').add({
    title: titlePost,
    content: contentPost,
    typePost: classPost,
    regionPost: region,
    date: new Date()
})
};

//Funcion para obtener  nuestros posts ya creados desde firestore 
export const getPost = () =>
  firebase.firestore().collection('posts').get()

  export const getRealTimePost = (callback) => {
    const allPosts = firebase.firestore().collection('posts').orderBy('date', 'desc');
    allPosts.onSnapshot(snapshot => {
      const posts = []
      snapshot.forEach(doc => {
        const data = doc.data();
        posts.push({ id: doc.id, doc: data });
      })
      callback(posts)
    })
  }



