import { getPostByID, editPostFirebase } from '../lib/firebase.js';
import { changeHash } from '../lib/index.js';

export const editPostTemplate = (id) => {
  const div7 = document.createElement('div');
  const editPost = `
  <header class="headerSecondary">
  <img src="./images/Logo.png" class="logo">
  </header>
  <div id="editPostPage" class="inputForm">
    <h2 class="title1" >Editar post</h2>
    <form id="editPostForm">
      <ul class="createPostUl" id="inputList">
        <li>
          <label id="createTitle" for="titleCreatePost">Título</label>
          <input type="text" id="titleCreatePost">
        </li>
        <li>
          <label id="createIntersting" for="contents">Contenido</label>
          <textarea id="contents" cols="30" rows="10"></textarea>
        </li>   
        <li>
        <label class="uploadFilePost" for="imgPst">Imagen</label>
        <input type="file" id="imgPst" accept="image/x-png,image/gif,image/jpeg">
        <button class="bttn" id="saveChanges">Guardar cambios</button>
        </li>                 
      </ul>
    </form>
    <footer class="footer2">
  <a class="anclaFooter" href="javascript:location.reload()"><img class="imgFooter" src="../images/home.png"></a>
  <a class="anclaFooter" href="#/Filtrar&Buscar"><img class="imgFooter" src="../images/magnifyingGlass.png"></a>
  <ul id= "singOutProfile"><img id="userInpt"  src="../images/user.png"></ul>
  </footer>
  </div>
  `;
  div7.innerHTML = editPost;
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(div7);

  // Pasando la informacion del post que se necesita editar a nuestros imputs
  const editTitle = div7.querySelector('#titleCreatePost');
  const editContent = div7.querySelector('#contents');
  getPostByID(id)
    .then((post) => {
      const postData = post.data();
      editTitle.value = postData.title;
      editContent.value = postData.content;
      // if (postData.typePost === 'recomendation') {
      //   const recomendationInpt = div7.querySelector('#recomendation');
      //   recomendationInpt.setAttribute('checked', true);
      // } else if (postData.typePost === 'memories') {
      //   const memoriesInpt = div7.querySelector('#memories');
      //   memoriesInpt.setAttribute('checked', true);
      // } else if (postData.typePost === 'caution') {
      //   const cautionInpt = div7.querySelector('#caution');
      //   cautionInpt.setAttribute('checked', true);
      // }

      // Guardando los cambios en firebase
      const saveChanges = div7.querySelector('#saveChanges');
      saveChanges.addEventListener('click', () => {
        // const editTypePost = div7.querySelector('input[name="publicationType"]:checked').id;
        // const select = div7.querySelector('#selectRegion');
        // const selectRgn = select.options[select.selectedIndex].text;
        editPostFirebase(id, {
          title: editTitle.value,
          content: editContent.value,
          // typePost: editTypePost,
          // regionPost: selectRgn,
        });
        return changeHash('');
      });
    });
  return div7;
};
