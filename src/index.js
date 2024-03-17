import './style.css';
import { generateHomePage } from './home-page';
let home = generateHomePage();

function removeContent(){
    bindEvents();
    function cacheDom(){
        let button = document.querySelector("button");
        let content = document.querySelector("#content");
        let conainer = document.querySelector("#content > div");
        return {button,content,conainer};
    }

    function bindEvents(){
        cacheDom().button.addEventListener("click", remove);
    }

    function remove(){
        cacheDom().content.removeChild(cacheDom().conainer);
    }
}




