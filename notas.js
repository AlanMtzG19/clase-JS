let country = "Malawi";
let continent = "Africa";
//Interpolación de variables JS
let sentence = ` ${country} se ubica en ${continent}.`;
console.log(sentence); // -> Malawi se ubica en Africa.

//Big Int para numeros muy grandes que no se pueden mezclar con otro tipo de valor
let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big); // -> 1234567890000000000000n
console.log(typeof big); // -> bigint

console.log(big2); // -> 1n
console.log(7n / 4n); // -> 1n

//Utilización de Nan solo nos dice si una acción aritmética se pudo o no realizar
let a = 1 / 0;
let b = -Infinity;

console.log(a); // -> Infinity
console.log(b); // -> -Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number

let s = "definitivamente no es un numero";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number

//Regresa el caracter específico del indice seleccionado
let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k
//--------------------------Conversiones de tipos de datos----------------------\\
const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);




