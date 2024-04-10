const divCambioColor = document.getElementById("color");

divCambioColor.addEventListener("mouseenter", () => {
    divCambioColor.style.backgroundColor = "blue";
});

divCambioColor.addEventListener("mouseleave", () => {
    divCambioColor.style.backgroundColor = "red";
});

