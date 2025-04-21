let nombreProducto = "Marcadador indeleble";
let precioUnitario = 100;

let cantidadDeseada = prompt("¿Cuántos marcadores quiere comprar?");

let costoTotal = cantidadDeseada*precioUnitario;

if(cantidadDeseada >= 5){
    costoTotal = costoTotal - (costoTotal *= 0.1)
}

alert(`El precio total es ${costoTotal}`);