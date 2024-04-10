let contador = 0;
const botonLikes = document.getElementById("likes");
const contadorLikes = document.getElementById("contador");

botonLikes.addEventListener("click", () =>{
    contador++;
    contadorLikes.innerText = contador;
});