import { firestoreCollection } from '../lib/firebase.js'

export const createPostTemplate = () => {
  const div4 = document.createElement('div')
  const createPost = `
    <div id="createPostPage" class="inputForm">
      <h2>Crea tu post</h2>
      <form id="createPostForm">
        <ul>
          <li>
            <label id="createTitle" for="titleCreatePost">Título</label>
            <input type="text" id="titleCreatePost">
          </li>
          <li>
            <label id="createIntersting" for="contents">Contenido</label>
            <textarea id="contents" cols="30" rows="10"></textarea>
          </li>
          <li id="chooseRegion">
            <p>Tipo de publicación</p>
            <input type="radio" id="recomendation" name="publicationType" value="0"> 
            <label for="recomendation">Recomendación</label><br>
            <input type="radio" id="memories" name="publicationType" value="1">
            <label for="memories">Recuerdos</label><br>
            <input type="radio" id="caution" name="publicationType" value="2">
            <label for="caution">Precaución</label><br>
          </li>
          <li>
            <select id="selectRegion">
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
            <input type="file" id="uploadFilePost" accept ="image/x-png,image/gif,image/jpeg">
            <input type="submit" value="Subir post">
          </li>                 
        </ul>
      </form>
    </div
    `;
  div4.innerHTML = createPost;

  //Utilizando firestore para subir los posts.
  const createPostFireStore = div4.querySelector("#createPostForm");
  createPostFireStore.addEventListener("submit", async (e) => {
    e.preventDefault();
    const titleCreatePost = div4.querySelector('#titleCreatePost').value;
    const contents = div4.querySelector('#contents').value;
    const typePost = div4.querySelector('input[name="publicationType"]:checked').id;
    const select = div4.querySelector('#selectRegion').value;

    await firestoreCollection(titleCreatePost, contents, typePost, select)
    createPostFireStore.reset()
  });
  return div4;
};