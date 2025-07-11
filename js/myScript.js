
/*
let input = document.getElementById("browser");
//let value = input.dataset.value;
let buscar = document.getElementById("buscar");

buscar.addEventListener("click", function(){
    console.log(input.value);
    window.open(input.value, "_self");
});
*/
    /* Esta forma anterior saca en el 'input' el valor del 'value' que en este caso habíamos puesto la URL */
    /* Opto mejor por la forma siguiente. Hemos añadido 'data-val' a los 'option' del 'datalist' y añadido la URL a su valor */

function getVal() {
    let input = document.getElementById("receta"); // Obtenemos el input
    let datalist = document.getElementById("recetas"); // Obtenemos el datalist
    //console.log(input.getAttributeNames());
    let op_seleccionada = datalist.querySelector(`[value="${input.value}"]`); // Obtenemos la opción seleccionada buscando en el 'datalist' el valor que se ha ingresado en el 'input', con 'querySelector'

    let seleccion = op_seleccionada.getAttribute('data-val'); // Obtenemos  el atributo 'data-*' de la opción seleccionada, con getAttribute()
    let seleccion_con_dataset = op_seleccionada.dataset.val;  // O lo obtenemos con 'dataset'
    console.log(seleccion);
    console.log(seleccion_con_dataset);

    window.open(seleccion, "_self"); // Abrimos una página nueva con la URL indicada en 'seleccion'
}


/*document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
});*/


/* MENÚ RESPONSIVE lo incluimos en una función para inicializar después de que se cargue el contenido */
function inicializarMenuHamburger() {
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
}

/* Carrusel imágenes */
let sliderInner = document.querySelector(".slider--inner");
let images = sliderInner.querySelectorAll("img");
let index = 0;
let autoplay;

//sliderInner.style.transform = "translateX(-100%)";

function startAutoplay() {
    autoplay = setInterval(() => {
        index++;
        if (index >= images.length) index = 0;
        updateSlider();
    }, 1000);

    // Detener después de 10 segundos
    setTimeout(() => {
        sliderInner.style.transform = "translateX(0%)"; // Cuando termine vuelve a la primera imagen
        index = 0; 
        clearInterval(autoplay);
    }, 10000);
}

function updateSlider() {
    let percentage = index * -100;
    sliderInner.style.transform = `translateX(${percentage}%)`;
}

// Botones 
document.getElementById("next").addEventListener("click", () => {
    index++;
    if (index >= images.length) index = 0;
    updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
    index--;
    if (index < 0) index = images.length - 1;
    updateSlider();
});

// Iniciar automáticamente al cargar la página
startAutoplay();