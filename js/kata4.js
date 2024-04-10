const lista = document.getElementById("lista");
const usuarios = ["Bob", "Juan", "Anna", "Marta", "Carlos", "Susana"];

//VARIANTE 1

// let usuariosLista = "";
// //     "<li>Bob</li><li>Juan</li><li>Anna</li><li>Marta</li><li>Carlos</li><li>Susana</li>";


// for (const usuario of usuarios) {
//     usuariosLista += `<li>${usuario}</li>`;
// }

// lista.innerHTML = usuariosLista;  

//VARIANTE 2

// let texto = document.createTextNode("Mundo");
// const parrafo = document.getElementById("parrafo");

// parrafo.appendChild(texto);

usuarios.forEach( (usuario)=>{
    const item = document.createElement("li");
    item.textContent = usuario;
    lista.appendChild(item);
});