export const filterAndSeachTemplate = () => {
  const div5 = document.createElement('div');
  const filterAndSearch = `
  <header class="headerSecondary">
    <img src="./images/Logo.png" class="logo">
  </header>
  <div id="page4">
    <input type="search" id="searchInput" placeholder="Busca en esta web">
    <div id="filterByRegion">
      <img src="./images/chileanMap.png">
      <div id="chileanMap">
        <p>Arica y Parinacota</p>
        <p>Tarapacá</p>
        <p>Antofagasta</p>
        <p>Atacama</p>
        <p>Coquimbo</p>
        <p>Valparaíso</p>
        <p>Metropolitana</p>
        <p>Libertador Bernardo O'higgins</p>
        <p>Maule</p>
        <p>Ñuble</p>
        <p>Biobío</p>
        <p>Araucanía</p>
        <p>Los ríos</p>
        <p>Los lagos</p>
        <p>Aysén del Gral Carlos Ibáñez del Campo</p>
        <p>Magallanes y la Antártica Chilena</p>
      </div>
    </div>
  </div>`;
  div5.innerHTML = filterAndSearch;
  return div5;
};
