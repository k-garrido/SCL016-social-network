import { savePost, signOut } from '../lib/firebase.js';
import { changeHash } from '../lib/index.js';

export const createPostTemplate = () => {
  const div4 = document.createElement('div');
  const createPost = `
    <header class="headerSecondary">
    <img src="./images/Logo.png" class="logo">
    </header>
    <div id="createPostPage" class="inputForm">
      <h2 class="title1" >Crea tu post</h2>
      <form id="createPostForm">
        <ul class="createPostUl" id="inputList">
          <li>
            <label id="createTitle" for="titleCreatePost">Título</label>
            <input type="text" id="titleCreatePost">
          </li>
          <li>
            <label id="createIntersting" for="contents">Contenido</label>
            <textarea id="contents" cols="30" rows="10"></textarea>
          </li>
          <li class="createPostLi" id="chooseRegion">
          <p>Tipo de publicación</p>
          <img src="./images/recomendation.png" class="imgPin">
          <input type="radio" id="recomendation" name="publicationType" value="0"> 
          <label for="recomendation" class="inputRadio">Recomendación</label><br>
          <img src="./images/memories.png" class="imgPin">
          <input type="radio" id="memories" name="publicationType" value="1">
          <label for="memories" class="inputRadio">Recuerdos</label><br>
          <img src="./images/caution.png" class="imgPin">
          <input type="radio" id="caution" name="publicationType" value="2">
          <label for="caution" class="inputRadio">Precaución</label><br>
        </li>
          <li id="chooseRegion">
            <select class="bttn" id="selectRegion">
                <option value="">Selecciona tu región</option>
                <option value="aricaParinacota">Arica y Parinacota</option>
                <option value="tarapaca">Tarapacá</option>
                <option value="antofagasta">Antofagasta</option>
                <option value="atacama">Atacama</option>
                <option value="coquimbo">Coquimbo</option>
                <option value="valparaiso">Valparaíso</option>
                <option value="metropolitana">Metropolitana</option>
                <option value="bernardoOhiggins">Libertador Bernardo O'higgins</option>
                <option value="maule">Maule</option>
                <option value="nuble">Ñuble</option>
                <option value="biobio">Bio-Bío</option>
                <option value="araucania">Araucanía</option>
                <option value="losRios">Los ríos</option>
                <option value="losLagos">Los lagos</option>
                <option value="aysen">Aysén del Gral Carlos Ibáñez del Campo</option>
                <option value="magallanes">Magallanes y Antártica</option>              
            </select>
          </li>
          <li>
          <label class="uploadFilePost" for="imgPst">Imagen</label>
          <input type="file" id="imgPst" accept="image/x-png,image/gif,image/jpeg">
          <input class="bttn" type="submit" value="Subir post">e
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
  div4.innerHTML = createPost;
  // const storage = firebase.storage();
  const uploadImages = () => {
    const uploadImg = document.getElementById('imgPst');
    const file = uploadImg.files[0];
  };
  // Utilizando firestore para subir los posts.
  const createPostFireStore = div4.querySelector('#createPostForm');
  createPostFireStore.addEventListener('submit', async (e) => {
    e.preventDefault();
    const titleCreatePost = div4.querySelector('#titleCreatePost').value;
    const contents = div4.querySelector('#contents').value;
    const typePost = div4.querySelector('input[name="publicationType"]:checked').id;
    const select = div4.querySelector('#selectRegion');
    const selectRgn = select.options[select.selectedIndex].text;

    await uploadImages();
    await savePost(titleCreatePost, contents, typePost, selectRgn);
    createPostFireStore.reset();
    changeHash('#/Muro');
  });

  // Dando funcionalidad a los botones del footer
  const userInpt = div4.querySelector('#userInpt');
  const singOutProfile = div4.querySelector('#singOutProfile');
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

  return div4;
};
