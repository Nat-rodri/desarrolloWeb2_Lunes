let nombreProducto = "Marcador";
let precioUnitario = 100;

let cantidadDeseada = prompt(`¿Cuántos ${nombreProducto}es quiere comprar de ${precioUnitario} c/u?`);

let costoTotal = cantidadDeseada*precioUnitario;

if(cantidadDeseada >= 5){
    let descuento = costoTotal*0.1
    costoTotal = costoTotal - descuento
}

alert(`El precio total es ${costoTotal}`);