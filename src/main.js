import {singUpTemplate} from './lib/singUp.js';
import {singInTemplate} from './lib/singIn.js';
import {feedTemplate} from './lib/feed.js';
import {filterAndSeachTemplate} from './lib/filterAndSearch.js';
import {profileTemplate} from './lib/profile.js';
import {createPostTemplate} from './lib/createPost.js';

document.getElementById("root").innerHTML= singUpTemplate();
document.getElementById("root").innerHTML= singInTemplate();
document.getElementById("root").innerHTML= feedTemplate();
document.getElementById("root").innerHTML= filterAndSeachTemplate();
document.getElementById("root").innerHTML= profileTemplate();
document.getElementById("root").innerHTML= createPostTemplate();