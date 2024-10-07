
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