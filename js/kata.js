const boton = document.getElementById("demo");

const parrafo = document.getElementById("principal");
parrafo.innerText = "Hola Mundo";



const root = document.getElementById("root");
root.innerHTML = 
"<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>";



boton.addEventListener("click", () => {
    console.log("Hemos hecho click");
});