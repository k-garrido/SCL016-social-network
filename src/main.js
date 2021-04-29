
import {singInTemplate} from './lib/singIn.js';
import {singUpTemplate} from './lib/singUp.js';
import {feedTemplate} from './lib/feed.js';
import {filterAndSeachTemplate} from './lib/filterAndSearch.js';
import {profileTemplate} from './lib/profile.js';
import {createPostTemplate} from './lib/createPost.js';
import {editPostTemplate} from './lib/editPost.js';
import {loginGoogle} from './lib/index.js';


document.getElementById("root").innerHTML = singInTemplate();
// document.getElementById("root").innerHTML += singUpTemplate();
//document.getElementById("root").innerHTML += feedTemplate();
// document.getElementById("root").innerHTML += filterAndSeachTemplate();
// document.getElementById("root").innerHTML += profileTemplate();
// document.getElementById("root").innerHTML= createPostTemplate();
// document.getElementById("root").innerHTML= editPostTemplate();

//Registo del usuario
const singUpBttn = () =>{
  const mail = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  
  firebase.auth().createUserWithEmailAndPassword(mail, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert (error.message)
    // ..
  });
};
console.log(singUpBttn)
document.getElementById("singUpBttn").addEventListener("click",singUpBttn)

//Ingreso sesión usuario
const singInBttn = () =>{
  const mail2 = document.getElementById("mail2").value;
  const password2 = document.getElementById("password2").value;

  firebase.auth().signInWithEmailAndPassword(mail2, password2)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert (error.message)
  });
};
document.getElementById("singInBttn").addEventListener ("click", singInBttn);

// Creando el observador
const observer = ()=>{
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("existe usuario activo")
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      console.log("No existe usuario activo")
    }
  });
};
observer();

const loginBttn= document.querySelector("#googleBttn");
loginBttn.addEventListener ("click", ()=>{
  loginGoogle()
})