import { changingRoute } from './lib/router.js';
import { activeUser } from './lib/firebase.js'
import { changeHash } from './lib/index.js'

const startginRoutes = () => {
    window.addEventListener('hashchange', () => {
        changingRoute(window.location.hash)
    })
};
window.addEventListener("load", () => {
    activeUser(changeHash)
    changingRoute(window.location.hash)
    startginRoutes()
});