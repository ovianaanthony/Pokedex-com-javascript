class Cap extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const type = document.createElement("div");
        type.setAttribute("class", "types");

        const headSix = document.createElement("h6");
        headSix.textContent = "TYPE";
        type.appendChild(headSix);

        const elenc = document.createElement("ol");
        type.appendChild(elenc);

        const spn = document.createElement("span");
        elenc.appendChild(spn);
        spn.setAttribute("style","font-weight: bold");
        spn.textContent = this.getAttribute("type1");
        const difSpn = document.createElement("a");
        elenc.appendChild(difSpn);
        difSpn.setAttribute("style","font-weight: bold");
        difSpn.textContent = this.getAttribute("type2");

        const headFive = document.createElement("h5");
        headFive.textContent = "Atributes";
        type.appendChild(headFive);

        const parag = document.createElement("p");
        type.appendChild(parag);
        parag.setAttribute("style","filter: opacity(65%);");
        parag.getAttribute("Category");

        const parag2 = document.createElement("p");
        type.appendChild(parag2);
        parag2.getAttribute("Weight");

        const parag3 = document.createElement("p");
        type.appendChild(parag3);
        parag3.setAttribute("style","filter: grayscale(100%);");
        parag3.getAttribute("Abilities");

        const parag4 = document.createElement("p");
        type.appendChild(parag4);
        parag4.setAttribute("style","filter: opacity(65%);");
        parag4.getAttribute("Type");

        const parag5 = document.createElement("p");
        type.appendChild(parag5);
        parag5.getAttribute("Height");

        const headiFive = document.createElement("h5");
        headiFive.textContent = "Weakness";
        type.appendChild(headiFive);        

        const cardi = document.createElement("div");
        cardi.setAttribute("class", "cardio");
        type.appendChild(cardi);

        const elenc2 = document.createElement("ol");
        cardi.appendChild(elenc2);

        const spn2 = document.createElement("span");
        elenc2.appendChild(spn2);
        spn2.setAttribute("style","font-weight: bold");
        spn2.textContent = this.getAttribute("type1");
        const difSpn2 = document.createElement("a");
        elenc2.appendChild(difSpn2);
        difSpn2.setAttribute("style","font-weight: bold");
        difSpn2.textContent = this.getAttribute("type2");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const spanning = document.createElement("span");
        spanning.setAttribute("style", "font-weight: bold")
        spanning.getAttribute("class", "number");
        const spanning2 = document.createElement("span");
        spanning.getAttribute("class", "name");

        cardLeft.appendChild(spanning);
        cardLeft.appendChild(spanning2);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo");

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(type);
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
    width: 90%;
    box-shadow: 11px 7px 29px 0px rgba(0,0,0,0.75);   /* acessa o site box shadow css generator, ajusta as sombras e copia as formatações aqui*/
    -webkit-box-shadow: 11px 7px 29px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 11px 7px 29px 0px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: row;       /*este define que os lados fiquem alainhados um do lado do outro, ao invés de colunas */
    justify-content: space-between;
}

.card_right{
    padding-right: 150px;
    padding-top: 200px;
}


.card_left{
    display: flex;
}

.card_left > span{
    font-weight: 400;
    padding-left: 30px;
    padding-top: 30px;
}

.types {
    padding-top: 60px;
    padding-left: 30px;
}

.types > ol > span {
    background-color:#61e1ca;
    color: #fff;
    padding: .10rem .5rem;
    margin: .25rem 0;
    font-size: .625rem;
    border-radius: 2rem;
}
.types > ol > a {
    background-color: #d661e1;
    color: #fff;
    padding: .10rem .5rem;
    margin: .25rem 0;
    font-size: .625rem;
    border-radius: 2rem;
}

.types .cardio > ol > span {
    background-color:#e16161;
    color: #fff;
    padding: .10rem .5rem;
    margin: .25rem 0;
    font-size: .625rem;
    border-radius: 2rem;
}
.types .cardio > ol > a {
    background-color: #a561e1;
    color: #fff;
    padding: .10rem .5rem;
    margin: .25rem 0;
    font-size: .625rem;
    border-radius: 2rem;
}

.types > h6 {
    padding-left: 45px;
}
.types > h5{
    padding-left: 32px;
}
        `;
        return style;
    }
}

customElements.define("pokedex-details", Cap);