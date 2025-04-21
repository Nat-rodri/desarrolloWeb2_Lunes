let nombreProducto = "Marcador";
let precioUnitario = 100;

let cantidadDeseada = prompt(`¿Cuántos ${nombreProducto}es quiere comprar de ${precioUnitario} c/u?`);

let costoTotal = cantidadDeseada*precioUnitario;

if(cantidadDeseada >= 5){
    costoTotal = costoTotal - (costoTotal *= 0.1)
}

alert(`El precio total es ${costoTotal}`);