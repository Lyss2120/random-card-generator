/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".card").classList.add(obtenerPinta()); //agrega una clase en este caso aleatoria
  document.querySelector(".card").innerHTML = obtenerNumero(); // inserta un numero en este caso aleatorio reemplazando el que esta en html
};
// nueva variable contiene las dos funciones random necesarias para aparecer el nro y la pinta 
//se activan al click!
let button = document.querySelector("button");
button.addEventListener("click", () => {
  document.querySelector(".card").classList.add(obtenerPinta()); //agrega una clase en este caso aleatoria
  document.querySelector(".card").innerHTML = obtenerNumero(); // inserta un numero en este caso aleatorio reemplazando el que esta en html
});

//se retorna un index del array nro, osea una posicion aleatoria dentro del array retorna el nro que saldrá.
function obtenerNumero() {
  let nro = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let nroRandom = Math.floor(Math.random() * nro.length);
  console.log(nro[nroRandom]);
  return nro[nroRandom];
}

function obtenerPinta() {
  let pinta = ["heart", "club", "spade", "diamond"];
  let pintaRandom = Math.floor(Math.random() * pinta.length);
  return pinta[pintaRandom];
}
