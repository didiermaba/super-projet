let header = document.getElementById(mainHeader); 
let active = document.getElementsByClassName('active');
let links = document.getElementsByTagName('a') // ts les e qui ont la classe 
let footer = document.getElementsById('mainFooter')
let par = footer.getElementsByTagName('p')


console.log();

//---------------------------------------------------------------

// Modifier les e du DOM 

let mainP = document.querySelector('#pageContent main p'); // pr pointer sur l' e
mainP.setAttribute('align', 'right') // pr modif l'e (ca s'écrit également: mainP.align = "right"; )

console.log(mainP);

//-------------------------------------------------------------

// créer de nveaux e ds le DOM

let elemA = document.createElement('a') // créer l'e a
elemA.href = "produits.html"; // l'attribut de l'e a
let linkLabel = document.createTextNode('Produits'); // créer1 textNode
elemA.appendChild(linkLabel); // ajouter le texte à l'e a
let liElem = document.createElement('li'); // créer 1 e i 
liElem.appendChild(elemA) // ajouter l'e a à l' e i
document.querySelector('#mainNave ul').appendChild(liElem); // rechercher l'e ul et y ajouter l' e li créé plus tot

//-----------------------------------------------------------------
// Modifier les styles CSS en javaScript

let pageContent = document.getElementById('pageContent')
pageContent.style.backgroundImage ="url(../images/image-1.jpg)"

console.log(pageContent);
