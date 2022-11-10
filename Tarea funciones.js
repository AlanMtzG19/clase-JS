let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

//----------------------------------------Tarea 1----------------------------------------\\
/*Intenta modificar el código anterior para que sea lo más corto posible. */
let numberss = [50, 10, 40, 30, 20];
let sortedd = numberss.sort((a, b) => a - b);
console.log(sorted); // [10, 20, 30, 40, 50]
/*Luego modifica la función para que los elementos se ordenen en orden descendente, no en orden ascendente como en el ejemplo.*/
let number = [50, 10, 40, 30, 20];
let sorte = number.sort((a, b) => b - a);
console.log(sorte); // [10, 20, 30, 40, 50]
//----------------------------------------Tarea 2----------------------------------------\\
/*Escribe tres funciones con los nombres add, sub y mult, que tomarán dos argumentos numéricos.
Las funciones son para verificar si los argumentos dados son enteros (emplea Number.isInteger). 
Si no, devuelven NaN, de lo contrario, devuelven el resultado de la suma, la resta o la multiplicación, respectivamente.
Las funciones deben declararse mediante una instrucción de función.*/
/*Ejemplo de su uso y resultados esperados:*/
function numero(x,y){
    if(Number.isInteger(x)==true && Number.isInteger(y)==true){
        return true;
    }
    else{
        return false;
    }
}

function add(a,b){
    if(numero(a,b)==true){
        let resultado = a+b
        return resultado;
    }else{
        return NaN;
    }
}

function sub(a,b){
    if(numero(a,b)==true){
        let resultado = a-b
        return resultado;
    }else{
        return NaN;
    }
}

function mult(a,b){
    if(numero(a,b)==true){
        let resultado = a*b
        return resultado;
    }else{
        return NaN;
    }
}
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
//----------------------------------------Tarea 3----------------------------------------\\
/*Reescribe las funciones de la tarea anterior usando una expresión de función arrow o flecha,
tratando de escribirlas en la forma más corta posible.

Ejemplo de su uso y resultados esperados:*/
// let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
// let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
// let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
// console.log(add(12, 10)); // -> 2
// console.log(mult(10, 10.1)); // -> NaN
//----------------------------------------Tarea 4----------------------------------------\\
/*Escriba una función action que tomará la función callback como su primer argumento y los otros dos 
argumentos como números. Como función callback, podrá pasar una de las tres funciones de la tarea anterior. 
La función action llamará a la función callback que se le pasó y devolverá el resultado obtenido. La función 
callback aceptará el segundo y el tercer argumento de la invocación.

Ejemplo de su uso y resultados esperados:*/

function action(callback,a,b){
    return callback(a,b);
}

console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
//----------------------------------------Tarea 5----------------------------------------\\
// Escribe un programa que imprima (en la consola) números enteros consecutivos 10 veces, en intervalos de 
// dos segundos (comienza con el número 1). Utiliza las funciones setInterval, clearInterval y setTimeout.
// Ejemplo de su uso y resultados esperados:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
var inter=setInterval(imprimir,2000)
let i=1
function imprimir(){
    if(i<=10){
        console.log(i)
        i++
    }else{
        return;
    }
}


