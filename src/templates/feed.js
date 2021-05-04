export const feedTemplate = () => {
  const div3 = document.createElement ('div')
  const feed = `
  <div id="page3" class="inputForm">
    <div>
      <a href="#/CreaTuPost"><input type="button" value="Crea tu post" id="postButton" class="inptFeed"></a>
    <a href="#/Filtrar&Buscar"><input type="button" value="Filtrar post" id="filterButton" class="inptFeed"></a>
    </div>
    <div id = "postContainer">
    </div>
    <footer id="footer">
      <a href="javascript:location.reload()"><img src="../images/home.png"></a>
      <a href="#/Filtrar&Buscar"><img src="../images/magnifyingGlass.png"></a>
      <a href="#/Perfil"><img src="../images/user.png"></a>
    </footer>
  </div>`;
  div3.innerHTML = feed;

  //Importando nuestra coleccion desde firestore.
  const posts = div3.querySelector ('#postContainer')
  const database = firebase.firestore();
  const getPost = () => database.collection('posts').get();

  //Comenzando a manejar la data de firebase para agregar la informacion a los posts.
  const  addingPosts =  async () => { 
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
    return postDiv
  };
  addingPosts()
  return div3;
};
