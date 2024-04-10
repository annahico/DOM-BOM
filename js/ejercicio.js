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

//variante 1

let moviesLista = "";

for (const movie of movies) {
    moviesLista += `<li>${movie.title} (+${movie.age})</li>`;
}

lista.innerHTML = movieLista;

//variante 2

movies-array.forEach(movie => {
    const item = document.createElement("li");
    item.textContent = `${movie.title} (+${movie.age})`;
    lista.appendChild(item);

});
