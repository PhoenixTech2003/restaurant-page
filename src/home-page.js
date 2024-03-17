function generateHomePage(){
    createElements();
    function cacheDom(){
        const content = document.querySelector("#content");
        return{content};
    }

    
    function createElements(){
        const h1 = document.createElement("h1");
        const div = document.createElement("div");
        cacheDom().content.appendChild(div);
        const selectDiv = document.querySelector("#content > div");
        h1.innerHTML = "Welcome to <span>Chichi's Eats</span> where we put <br> the mmmmmmh in your mouth";
        selectDiv.appendChild(h1);

       
    }




}

export {generateHomePage};