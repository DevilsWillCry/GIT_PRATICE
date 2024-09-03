// Seleccionamos todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('.Nav-Main a');
// Añadimos un evento a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Desmarcar el checkbox para cerrar el menú
        document.getElementById('check').checked = false;
    });
});

// Selecciona el elemento que deseas modificar o mostrar cuando estés en el inicio de la página
const myElement = document.querySelector('.arrow-up a'); // Cambia '.my-element' por el selector adecuado
// Define el nuevo valor para el atributo href cuando el usuario esté en el inicio
const newHrefUp = '#Section-Contact'; // Cambia esto al URL deseado
// Función que se ejecuta cuando el usuario hace scroll
function checkScrollPosition() {
    if (window.scrollY === 0) {
        // El usuario está en el inicio de la página
        myElement.classList.add('at-top');
        myElement.href = newHrefUp;
        console.log('Estás en el inicio de la página.');
    } else {
        // El usuario ha desplazado hacia abajo
        myElement.classList.remove('at-top');
        myElement.href = '#'; // Quita el enlace cuando el usuario no está en el inicio
        console.log('Has desplazado hacia abajo.');
    }
}
// Agrega el evento de scroll al objeto window
window.addEventListener('scroll', checkScrollPosition);

// Llama a la función al cargar la página para establecer el estado inicial
checkScrollPosition();



// Detecta el desplazamiento y agrega la clase 'visible'
function checkVisibility() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Agrega el evento de scroll
window.addEventListener('scroll', checkVisibility);
// Llama a la función para verificar al cargar la página
checkVisibility();


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


window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.Reveal');
    for(var i=0; i<reveals.length; i++) {
        var windoHeight = window.innerHeight
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 80;
        //var revealPoint = windowHeight - (revealTop / 3);

        if(revealTop < windoHeight - revealPoint) {
            reveals[i].classList.add('visible');
        } else {
            reveals[i].classList.remove('visible');
        }
    }
}

/*
window.onload = function () {
    window.scrollTo(0, 0);
};
*/

const element = document.getElementsByClassName('arrow-up')[0];
element.addEventListener('mouseover', () => {
    // Code to execute when the mouse is over the element
    element.classList.add('overArrowUp');
});
element.addEventListener('mouseout', () => {
    // Code to execute when the mouse leaves the element
    element.classList.remove('overArrowUp');
});