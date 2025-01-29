const plus = document.querySelector(".bouton")
const colTransport = document.querySelector(".conteneur-transport")

plus.addEventListener('click', ouvreferme)

function ouvreferme(){
    colTransport.classList.toggle("conteneur-transport-invisible")
}