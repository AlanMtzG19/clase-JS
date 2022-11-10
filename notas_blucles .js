//-------------------------------------------Blucle While----------------------------------\\

let isOver = false;
let counter = 1;

while (isOver != true) {
    let continueLoop = confirm(`[${counter}] ¿Continuar en el bucle?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
/*  ^
    |
    |
    | 
    Es lo mismo pero simplificado    */
let isOvers = false;
let counters = 1;

while (!isOver) {
    isOver = !confirm(`[${counter++}] ¿Continuar en el bucle?`);
}
//-------------------------------------------Blucle Do-While----------------------------------\\
//Este se itera siempre al menos una vez
let isOverr;
let counterr = 1;

do {
    isOver = !confirm(`[${counter++}] ¿Continuar en el bucle?`);
} while (!isOver);

//Ejemplo 2
let condition = false;
while (condition) {
    console.log("Una iteración del bucle while."); // nunca se ejecuta
}

do {
    console.log("Una iteración del bucle do ... while."); // ejecutado una vez
} while (condition);
