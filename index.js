// Agregar funcionalidad a los botones del menú
document.querySelectorAll(".boton-menu").forEach((boton) => {
  boton.addEventListener("click", function () {
    const seccion = this.getAttribute("data-seccion");
    const elemento = document.getElementById(seccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  });
});
