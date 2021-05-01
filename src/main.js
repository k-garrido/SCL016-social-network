
import singInTemplate from './lib/singIn.js';
import singUpTemplate from './lib/singUp.js';
import feedTemplate from './lib/feed.js';
import filterAndSeachTemplate from './lib/filterAndSearch.js';
import profileTemplate from './lib/profile.js';
import createPostTemplate from './lib/createPost.js';
import editPostTemplate from './lib/editPost.js';
import { loginGoogle, errorAD } from './lib/index.js';

document.getElementById('root').innerHTML = singInTemplate();
document.getElementById('root').innerHTML += singUpTemplate();
document.getElementById('root').innerHTML += feedTemplate();
document.getElementById('root').innerHTML += filterAndSeachTemplate();
document.getElementById('root').innerHTML += profileTemplate();
document.getElementById('root').innerHTML += createPostTemplate();
document.getElementById('root').innerHTML += editPostTemplate();


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
    errorAD(errorMessage);
  });
 };
document.getElementById('singInBttn').addEventListener('click', singInBttn);

// Registo del usuario
const singUpBttn = () => {
  const mail2 = document.getElementById('mail2').value;
  const password2 = document.getElementById('password2').value;
  firebase.auth().createUserWithEmailAndPassword(mail2, password2).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    errorAD(errorMessage);
  });
};
document.getElementById('singUpBttn').addEventListener('click', singUpBttn);

// Creando el observador
const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // console.log('existe usuario activo');
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      // console.log('No existe usuario activo');
    }
  });
};
observer();


const loginBttn= document.querySelector("#googleBttn");
loginBttn.addEventListener ("click", () => {
  loginGoogle()
})

//importando firebase desde firestore
const database = firebase.firestore();
const createPostFireStore=document.getElementById("createPostForm");
const posts = document.getElementById ("postContainer")
const savePost= (titlePost,contentPost,classPost,region) => {
  database.collection('posts').doc().set({
    title: titlePost,
    content: contentPost,
    typePost: classPost,
    regionPost: region
  })
};
const getPost = () => database.collection('posts').get();

//comenzando a manejar la data de firebase para agregar la informacion a los posts
window.addEventListener("DOMContentLoaded", async (e) => {
  const dataFirebase = await getPost();
  dataFirebase.forEach(post => {
    const postDiv = document.createElement ("div");
    postDiv.id= "postDiv"
    postDiv.innerHTML = ` 
    <div> 
      <img src="images/${post.data().typePost}.png"
      <input type="button" value="..." id="settings">
    </div>
    <figure>
      <h3 id="postTitle">${post.data().title}</h3>
      <img src="" id="uploadImg">
      <figcaption id="description">${post.data().content}</figcaption>
      <input type="button" value="¡Yo voy!" id="likeButton">
    </figure>`;
    posts.appendChild(postDiv);
  });
})
createPostFireStore.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  const titleCreatePost=document.getElementById("titleCreatePost").value;
  const contents=document.getElementById("contents").value;
  const typePost = document.querySelector('input[name="publicationType"]:checked').id;
  const select=document.getElementById ("selectRegion").value;
 
  await savePost(titleCreatePost,contents,typePost,select)
  createPostFireStore.reset ()
 });
