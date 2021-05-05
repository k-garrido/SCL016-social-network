export const editPostTemplate = () => {
  const editPost = `
    <div id="editPostPage">
          <h2 class="title1">Editar post</h2>
          <form>
            <ul>
              <li>
                <label for="interesting">Título</label>
                <input type="text" id="titleCreatePost">
              </li>
              <li>
                <label for="interesting">Contenido</label>
                <textarea id="contents" cols="30" rows="10"></textarea>
              </li>
              <li>
                <p>Tipo de publicación</p>
                <input type="radio" id="recomendation" name="publicacionType" value="0">
                <label for="recomendation">Recomendación</label><br>
                <input type="radio" id="memories" name="publicacionType" value="1">
                <label for="memories">Recuerdos</label><br>
                <input type="radio" id="caution" name="publicacionType" value="2">
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
          </div>
          `;
  return editPost;
};
