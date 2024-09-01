// Seleccionamos todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('.Nav-Main a');
// Añadimos un evento a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Desmarcar el checkbox para cerrar el menú
        document.getElementById('check').checked = false;
    });
});



// Seleccionamos el checkbox, los enlaces de navegación y el h2
const checkbox = document.getElementById('check');
/*const heading = document.querySelector('.About-Me h2'); -> Toma solo la primera ocurrencia*/ 
const headings = document.querySelectorAll('h2'); /* -> Toma todas las ocurrencias*/
// Función para mostrar u ocultar el h2
function toggleHeadingVisibility() {
    if (checkbox.checked) {
        // Si el menú está desplegado, ocultamos el h2
        headings.forEach(heading => {
            heading.classList.add('hidden-heading');
        });
    } else {
        // Si el menú está cerrado, mostramos el h2
        headings.forEach(heading => {
            heading.classList.remove('hidden-heading');
        });
    }
}

// Añadir evento de clic a cada enlace de navegación
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Desmarcar el checkbox para cerrar el menú
        checkbox.checked = false;
        // Asegurarnos de mostrar el h2 cuando se cierra el menú
        toggleHeadingVisibility();
    });
});

// Añadir evento de cambio al checkbox para controlar la visibilidad del h2
checkbox.addEventListener('change', toggleHeadingVisibility);
