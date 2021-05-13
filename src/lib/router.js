import { singInTemplate } from '../templates/singIn.js';
import { singUpTemplate } from '../templates/singUp.js';
import { feedTemplate } from '../templates/feed.js';
import { createPostTemplate } from '../templates/createPost.js';
import { filterAndSeachTemplate } from '../templates/filterAndSearch.js';
import { profileTemplate } from '../templates/profile.js';
import { editPostTemplate } from '../templates/editPost.js';
import { activeUser } from './firebase.js';
import { changeHash } from './index.js';

export const changingRoute = (hash) => {
  const root = document.getElementById('root');
  root.innerHTML = '';
  if (hash === '#/Registrate') {
    root.appendChild(singUpTemplate());
  } else if (hash === '#/IniciarSesion' || hash === '') {
    activeUser(changeHash);
    root.appendChild(singInTemplate());
  } else if (hash === '#/Muro') {
    activeUser(changeHash);
    root.appendChild(feedTemplate());
  } else if (hash === '#/CreaTuPost') {
    root.appendChild(createPostTemplate());
  } else if (hash === '#/EditarPost') {
    root.appendChild(editPostTemplate());
  } else if (hash === '#/Filtrar&Buscar') {
    root.appendChild(filterAndSeachTemplate());
  } else if (hash === '#/Perfil') {
    root.appendChild(profileTemplate());
  } else {
    root.innerHTML = 'Esta pagina no existe';
  }
};
