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

//Agregar animacion para la lista de locales

document.querySelectorAll('.locales-grid details').forEach((detail) => {
  const summary = detail.querySelector('summary');
  const content = detail.querySelector('.details-content');

  summary.addEventListener('click', (event) => {
    event.preventDefault();

    if (detail.open) { 
      const height = content.offsetHeight; //Si se cierra el panel, obtener la altura inicial
      content.style.height = `${height}px`; //se define explicitamente y se anima a 0.

      requestAnimationFrame(() => {
        content.style.height = '0px';
      });


      content.addEventListener('transitionend', () => { // Termina la animación y se cierra el panel de "details"
        detail.open = false;
        content.style.height = null;
      }, { once: true });


    } else {
      detail.open = true; //Si se abre el panel, se abre la etiqueta "details"
      const height = content.offsetHeight; //Saca la altura de todo el contenido

      content.style.height = '0px'; //Inicia la altura en 0 y lo anima hasta la altura total.
      requestAnimationFrame(() => {
        content.style.height = `${height}px`;
      });
      content.addEventListener('transitionend', () => {
        content.style.height = null;
      }, { once: true });
    }
  });
});

//Funcionalidad de la localizacion de los locales en el mapa

document.addEventListener('DOMContentLoaded', () => {
  const localesEnLista = document.querySelectorAll('.locales-lista li[data-local]'); // para todos los <li> en que tengan data-local en <locales-lista>

  localesEnLista.forEach(local => { // sobre cada elemento
    local.addEventListener('mouseover', function() { //cuando se hace hover con el mouse
      const localId = this.dataset.local;
      const puntoEnMapa = document.getElementById(`punto-${localId}`); //se pone el puntito
      if (puntoEnMapa) {
        puntoEnMapa.classList.add('activo'); //se da clase activo y le pone la animacion
      }
    });

    local.addEventListener('mouseout', function() { // al revés, evento cuando no está el hoer
      const localId = this.dataset.local;
      const puntoEnMapa = document.getElementById(`punto-${localId}`);
      if (puntoEnMapa) {
        puntoEnMapa.classList.remove('activo'); //se saca el activo para que no se muestre
      }
    });
  });
});