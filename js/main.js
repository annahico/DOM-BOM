// const grids = document.getElementsByClassName("grid");
const grids = document.getElementsByTagName("div"); //esto es por etiqueta o clase
for (let i = 0; i < grids.length; i++) {
    const element = grids[i];
    element.style.backgroundColor = "yellow";
}

const unico = document.getElementById("unico"); //aqui ELEMENT es en singular porque solo se puede poner un ID en HTML
unico.style.backgroundColor = "green";