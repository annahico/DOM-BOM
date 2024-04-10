const lista = document.getElementById("lista");

const movies = [
    {
        title: "Soy Leyenda",
        age: 13,
    },
    {
        title: "Rey León",
        age: 3,
    },
    {
        title: "La Marca del Demonio",
        age: 18,
    },
    {
        title: "A todo Gas",
        age: 8,
    },
];


const películas = ["Bob", "Juan", "Anna", "Marta", "Carlos", "Susana"];

usuarios.forEach((usuario) => {
    const item = document.createElement("li");
    item.textContent = usuario;
    lista.appendChild(item);
});