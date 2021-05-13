// Ingreso sesión usuario
export const singInBttn = (mail, password) =>
  firebase.auth().signInWithEmailAndPassword(mail, password);

// Registo del usuario
export const singUpBttn = (mail2, password2) => firebase.auth().createUserWithEmailAndPassword(mail2, password2);

// Login con Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

// Creando el observador
export const activeUser = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback('#/Muro');
    } else {
      callback('#/IniciarSesion');
    }
  });
};
// Funcion para desconectarse
export const signOut = () => firebase.auth().signOut();

// Firestore, creando coleccion
export const savePost = (titlePost, contentPost, classPost, region) => {
  return firebase.firestore().collection('posts').add({
    title: titlePost,
    content: contentPost,
    typePost: classPost,
    regionPost: region,
    date: new Date(),
  });
};

// Funcion para obtener  nuestros posts ya creados desde firestore
export const getPost = (callback) => firebase.firestore().collection('posts').onSnapshot(callback);

// Funcion para obtener un post segun el ID entregado
export const getPostByID = (id) => firebase.firestore().collection('posts').doc(id).get();

// Funcion para borrar posts
export const deletePostFirebase = (id) => firebase.firestore().collection('posts').doc(id).delete();

// Funcion para editar post
export const editPostFirebase = (id, updatedPost) => {
  const firestore = firebase.firestore();
  return firestore.collection('posts').doc(id).update(updatedPost);
};

