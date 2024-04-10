// const grids = document.getElementsByClassName("grid");
// const grids = document.getElementsByTagName("div"); //esto es por etiqueta o clase
const grids = document.querySelectorAll(".grid")


for (let i = 0; i < grids.length; i++) {
    const element = grids[i];
    element.style.backgroundColor = "yellow";
}

//Por ID
// const unico = document.getElementById("unico"); //aqui ELEMENT es en singular porque solo se puede poner un ID en HTML
const unico = document.querySelector("#unico");
unico.style.backgroundColor = "green";