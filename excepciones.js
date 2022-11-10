/*Una excepción que lancemos hará que el programa reaccione de la misma manera que las excepciones de 
JavaScript originales (es decir, detendrá su ejecución). Es decir, a menos que lo arrojemos dentro del 
bloque try para manejarlo. Veamos un ejemplo sencillo, sin tratar de encontrarle ningún significado especial. 
Esta es solo una ilustración del uso de la instrucción throw:*/

console.log("inicio"); // -> inicio
throw 100; // -> Uncaught 100
console.log("fin");

/*Una excepción no admitida (si el número 100 se puede llamar una excepción) hace que el programa se detenga. 
La segunda instrucción console.log nunca se ejecuta.

Cerremos la instrucción throw dentro del bloque try:*/

console.log("inicio"); // -> inicio
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("fin"); // -> fin

//------------------------------------Personalizado------------------------------\\
function factorial(n) {
    if (n > 20) {
        throw new RangeError("Valor máximo 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Valor máximo 20