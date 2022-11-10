//---------------------------------Tarea 2-------------------------\\
function div(a, b) {
    if (b == 0) {
        throw new RangeError("No se puede dividir entre 0");
    }
    return a / b;
}
console.log(div(4, 2)); // -> 2
console.log(div(4, 0)); // -> Uncaught RangeError: No se puede dividir entre 0
//---------------------------------Tarea 2-------------------------\\
let numbers = [10, 40, 0, 20, 50];
try {
    for(i=0;i<number.length;i++){
        1000/number[i];
        throw new RangeError("No es posible esta división")
    }
} catch (error) {
    console.log("Error al intentar la division")
}

