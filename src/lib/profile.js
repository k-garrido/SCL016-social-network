export const profileTemplate = () => {
  const profile = `
    <div id="pageProfile">
      <h2>Modifica tu perfil</h2>
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
    </div>`
  return profile;
};