// #1
let firstArticleHeader = document.querySelector(".art-1 h3");
firstArticleHeader.innerText = "Potato"


// #2
let anchors = document.querySelectorAll("a"); // en lista av alla a taggar
//for (let anchor in anchors) { console.log(anchor); } // for-each-in (varje index)
for (let anchor of anchors) { // for-each-of (varje element i listan)
  // ifall texten på anchor är "home", byt till "start"
  if (anchor.innerText == "Home") {
    anchor.innerText = "Start";
  }

  // #3
  if (anchor.innerText == "Contact") {
    anchor.innerText = "Mail us";
  }
}

/*for (let i = 0; i < anchors.length; i++) {
  let anchor = anchors[i];

  if (anchor.innerText == "Home") {
    anchor.innerText = "Start";
  }
}*/

// #4
let secondArticleText = document.querySelector(".art-2 p");
secondArticleText.innerText = " Ipsum lorem dolor sit amet consectetur adipisicing elit. Repellendus quasi, ullam debitis eligendi adipisci labore."


// #5
let secondArticleButton = document.querySelector(".art-2 button");
secondArticleButton.style.backgroundColor = "darkgreen";
secondArticleButton.innerText = "Bought"

// #6
let secondArticle = document.querySelector(".art-2 figure");
secondArticle.style.backgroundColor = "#d9d9d9";

// #7
let footerAdressPara = document.querySelector("footer p");
//footerAdressPara.innerText = "Sinus skateboards\nEriksberg 32\n133 38, Dropnäs";
footerAdressPara.innerHTML = "Sinus skateboards<br>Eriksberg 32<br>133 38, Dropnäs";

// #8
let paras = document.querySelectorAll("p");
for (let i = 0; i < paras.length; i++) {
  let para = paras[i];

  para.style.color = "#a9a9a9";
}
/*let pStyle = document.createElement("style");
pStyle.innerText = "p {color: #a9a9a9 }"
document.head.append(pStyle);*/

/*function changeParaColors(para) {
  para.style.color = "red"
}

paras.forEach(para => {
  para.style.color = "red";
});

paras.forEach(changeParaColors);*/

// #9
/*let buttons = document.querySelectorAll("button");
buttons.forEach(button => {

  if (button.innerText != "Bought") {
    button.innerText = "add to cart";
  }

});*/

let buttons = document.querySelectorAll("button");

function updateUnBoughtButtons(button) {
  if (button.innerText != "Bought") {
    button.innerText = "add to cart";
  }
}

buttons.forEach(updateUnBoughtButtons);


// #10
let startNavAnchor = document.querySelector("nav a");
//startNavAnchor.className = "active"; // Skriver över alla klassnamn
startNavAnchor.classList.add("active");

// #11
let logo = document.querySelector(".logo");
//logo.className = "";
logo.classList.remove("logo");

// #12
let nav = document.querySelector("nav");
let a = document.createElement("a");

a.innerText = "Profile";
a.href = "#";

//nav.append(a);
//nav.insertAdjacentHTML("beforeend", "<a>Profile</a>");
let lastNavElement = nav.lastElementChild;
nav.insertBefore(a, lastNavElement);

// #13
/*
  <article class="art-1">
    <figure><img src="img/hoodie-ash.png" alt="hoodie" /></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Ash</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
      doloremque ducimus enim!
    </p>
    <button>buy</button>
  </article>
*/

function createNewArticle(parent, imgSrc, h2Text, h3Text, paraText) {
  let newArticleContent = `
  <figure>
    <img src="${imgSrc}" />
  </figure>
  <h2>${h2Text}</h2>
  <h3>${h3Text}</h3>
  <p>${paraText}</p>
  <button>add to cart</button>`;

  let newArticle = document.createElement("article");
  newArticle.innerHTML = newArticleContent;

  parent.append(newArticle);
}

let main = document.querySelector("main");
/*createNewArticle(
  main,
  "img/hoodie-forrest.png",
  "Sinus Hoodie",
  "Forrest",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."
);*/

// Skapa 10 hoodies
let subtitles = ["Forrest", "Orange", "Fall", "Whale"];
for (let i = 0; i < subtitles.length; i++) {
  createNewArticle(
    main,
    "img/hoodie-forrest.png",
    "Sinus Hoodie",
    subtitles[i],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."
  );
}

/*let main = document.querySelector("main");
let newArticle = document.createElement("article");
let newArticleContent = `
  <figure>
    <img src="img/hoodie-forrest.png" />
  </figure>
  <h2>Sinus Hoodie</h2>
  <h3>Forrest</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
  <button class="bigger-btn">add to cart</button>`;

newArticle.className = "art-4";
newArticle.innerHTML = newArticleContent;

main.append(newArticle);*/

/*let main = document.querySelector("main");

let article = document.createElement("article");
let figure = document.createElement("figure");
let img = document.createElement("img");
let h2 = document.createElement("h2");
let h3 = document.createElement("h3");
let p = document.createElement("p");
let button = document.createElement("button");

article.className = "art-4";

figure.append(img);

img.src = "img/hoodie-forrest.png";
img.alt = "hoodie";

h2.innerText = "Sinus Hoodie";
h3.innerText = "Forrest";
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";
button.innerText = "add to cart";

article.append(figure, h2, h3, p, button);

main.append(article);*/


// #14
function handleLogoClick() {
  console.log("Found you!");
}

//Logo deklerarades längre upp, därav ingen "let"
logo.addEventListener("click", handleLogoClick);
//logo.addEventListener("click", () => console.log("Found you!"));

// #15
// När man trycker på artikeln ska h3 texten skrivas ut
let articles = document.querySelectorAll("main article"); // alla artiklar i main

function handleArticleClick(event) { // implicit event objekt (följer med EventListener)
  //console.log(event.currentTarget); // currentTarget är det element som regades i EventListener
  let article = event.currentTarget;
  let h3 = article.querySelector("h3"); //document.querySelector(article h3)
  console.log("Hi, I'm article " + h3.textContent);
}

for (let i = 0; i < articles.length; i++) {
  let article = articles[i];

  article.addEventListener("click", handleArticleClick);
}