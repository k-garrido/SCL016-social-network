import { getPost, signOut, deletePostFirebase } from '../lib/firebase.js';
import { changeHash } from '../lib/index.js';
import { editPostTemplate } from './editPost.js';

export const feedTemplate = () => {
  const div3 = document.createElement('div');
  div3.id = 'feedContainer';
  const feed = `
  <header class="headerSecondary">
    <img src="./images/Logo.png" class="logo">
  </header>
  <div id="page3" class="inputForm">
    <div id="inputDiv">
      <a href="#/CreaTuPost" class="anclaFeed"><input type="button" value="Crea tu post" id="postButton" class="inptFeed"></a>
      <a href="#/Filtrar&Buscar" class="anclaFeed"><input type="button" value="Filtrar post" id="filterButton" class="inptFeed"></a>
    </div>
    <div id = "postContainer">
    </div>
   
  </div> 
  <footer class="footer2">
      <a class="anclaFooter" href="javascript:location.reload()"><img class="imgFooter" src="../images/home.png"></a>
      <a class="anclaFooter" href="#/Filtrar&Buscar"><img class="imgFooter" src="../images/magnifyingGlass.png"></a>
      <ul id= "singOutProfile"><img id="userInpt"  src="../images/user.png"></ul>
  </footer>
  `;
  div3.innerHTML = feed;

  // Comenzando a manejar la data de firebase para agregar la informacion a los posts.
  const posts = div3.querySelector('#postContainer');
  const addingPosts = () => {
    getPost((querySnapshot) => {
      posts.innerHTML = '';
      querySnapshot.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.id = 'postDiv';
        postDiv.innerHTML = ` 
          <div id="divPosts">
            <img src="../images/${post.data().typePost}.png" class="imgPin">
            <h3 id="postTitle">${post.data().title}</h3>
            <div id="selectEditDelete">
              <p>...</p>
            </div>
            <div id="uploadImg"></div>
            <p id="regionId">${post.data().regionPost}</p>
            <p id="description">${post.data().content}</p>
            <input class="likeButton" type="button" value="¡Yo voy!" id="likeButton">
          </div>
          `;
        posts.appendChild(postDiv);

        // Creando los botones  para editar y borrar
        const deleteEdit = postDiv.querySelector('#selectEditDelete');
        deleteEdit.addEventListener('click', () => {
          deleteEdit.innerHTML = '';

          const deletePost = document.createElement('div');
          deletePost.textContent = 'Borrar';
          deleteEdit.appendChild(deletePost);
          deletePost.addEventListener('click', () => {
            deletePostFirebase(post.id);
          });

          const editPost = document.createElement('edit');
          editPost.textContent = 'Editar';
          deleteEdit.appendChild(editPost);
          editPost.addEventListener('click', () => {
            editPostTemplate(post.id);
          });
        });
        return postDiv;
      });
    });
  };
  addingPosts();

  // Creando la funcionalidad para desconectarse y  la ruta al perfil del usuario.
  const userInpt = div3.querySelector('#userInpt');
  const singOutProfile = div3.querySelector('#singOutProfile');
  userInpt.addEventListener('click', () => {
    const singOutBttn = document.createElement('LI');
    singOutBttn.className = 'profileFeed';
    singOutBttn.textContent = 'Desconectarse';
    singOutBttn.addEventListener('click', () => {
      signOut();
      changeHash('#/IniciarSesion');
    });
    const viewProfile = document.createElement('LI');
    viewProfile.className = 'profileFeed';
    viewProfile.textContent = 'Ver mi perfil';
    viewProfile.addEventListener('click', () => {
      changeHash('#/Perfil');
    });

    singOutProfile.insertBefore(singOutBttn, userInpt);
    singOutProfile.insertBefore(viewProfile, userInpt);
  });
  return div3;
};
