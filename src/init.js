import { changingRoute } from './lib/router.js';

const startginRoutes = () => {
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash)
        changingRoute(window.location.hash)
    })
};
window.addEventListener("load", () => {
    changingRoute(window.location.hash)
    startginRoutes()
});