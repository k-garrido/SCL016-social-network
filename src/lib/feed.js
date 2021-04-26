export const feedTemplate = () => {
const feed = `
<div id="page3">
<div>
  <input type="button" value="Crea tu post" id="postButton">
  <input type="button" value="Filtrar post" id="filterButton">
</div>
<div>
  <div>
    <img src="" id="postType">
    <input type="button" value="..." id="settings">
  </div>
  <figure>
    <h3 id="postTitle"></h3>
    <img src="" id="uploadImg">
    <figcaption id="description"></figcaption>
    <input type="button" value="¡Yo voy!" id="likeButton">
  </figure>
</div>
<footer id="footer">
    <img src="./images/home.png">
    <img src="./images/magnifyingGlass.png">
    <img src="./images/user.png">
  </footer>
</div>
`
return feed;
};