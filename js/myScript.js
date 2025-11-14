

function getVal() {
    let input = document.getElementById("receta"); 
    let datalist = document.getElementById("recetas"); 
    let op_seleccionada = datalist.querySelector(`[value="${input.value}"]`); 

    let seleccion = op_seleccionada.getAttribute('data-val'); 
    let seleccion_con_dataset = op_seleccionada.dataset.val;  
    console.log(seleccion);
    console.log(seleccion_con_dataset);

    window.open(seleccion, "_self"); 
}




/* MENÚ RESPONSIVE */
function inicializarMenuHamburger() {
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
}


// CARRUSEL DE IMÁGENES
const slider = document.querySelector(".slider--inner");
const thumbs = document.querySelectorAll(".thumb");

// Al hacer clic en una miniatura → mover slider--inner
thumbs.forEach(t => {
    t.addEventListener("click", () => {
        const index = t.dataset.index;
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: "smooth"
        });
    });
});

// Actualizar miniatura activa según la posición del slider
function updateActiveThumb() {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);

    thumbs.forEach(t => t.classList.remove("active"));
    if (thumbs[index]) {
        thumbs[index].classList.add("active");
    }
}

// Detectar scroll del slider (con pequeño debounce)
slider.addEventListener("scroll", () => {
    clearTimeout(slider._scrollTimer);
    slider._scrollTimer = setTimeout(updateActiveThumb, 100);
});

// Marcar la primera miniatura al cargar
updateActiveThumb();





/* Carrusel imágenes */
/*
let sliderInner = document.querySelector(".slider--inner");
let images = sliderInner.querySelectorAll("img");
let index = 0;
let autoplay;

function startAutoplay() {
    autoplay = setInterval(() => {
        index++;
        if (index >= images.length) {
            index = 0;
            clearInterval(autoplay);
        }
        updateSlider();
    }, 1000);
}

function updateSlider() {
    let percentage = index * -100;
    sliderInner.style.transform = `translateX(${percentage}%)`;
}
*/

// Botones 
/*
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
*/

// Iniciar automáticamente al cargar la página
// startAutoplay();