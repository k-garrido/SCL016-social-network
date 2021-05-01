export const feedTemplate = () => {
const feed = `
<div id="page3" class="inputForm">
  <div>
    <input type="button" value="Crea tu post" id="postButton" class="inptFeed">
    <input type="button" value="Filtrar post" id="filterButton" class="inptFeed">
  </div>
  <div id = "postContainer">
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