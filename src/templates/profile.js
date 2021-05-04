export const profileTemplate = () => {
  const div6 = document.createElement ('div');
  const profile = `
    <div id="pageProfile">
      <h2>Editar perfil</h2>
      <p></p>
      <form>
        <ul>
          <li>
            <label for="interesting">Intereses</label>
            <textarea id="interestingTextarea" cols="30" rows="10"></textarea>
          </li>
          <li>
            <input type="file" id="uploadFile" accept ="image/x-png,image/gif,image/jpeg">
            <input type="submit" value="Guardar cambios">
          </li>
          </ul>
      </form>
    </div>`;
  div6.innerHTML = profile;
  return div6;
};
