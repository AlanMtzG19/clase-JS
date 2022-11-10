const x = 5;
const y = 2;

console.log("suma: ", x + y); // -> 7
console.log("resta: ", x - y); // -> 3
console.log("multiplicación: ", x * y); // -> 10
console.log("división: ", x / y); // -> 2.5
console.log("residuo de la división: ", x % y); // -> 1
console.log("potencia: ", x ** y); // -> 25

let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number

let nn1 = 10;
let nn2 = 10;

console.log(nn1); // -> 10
console.log(n1++); // -> 10
console.log(nn1); // -> 11

console.log(nn2); // -> 10
console.log(++nn2); // -> 11
console.log(nn2); // -> 11

let nn3 = 20;
let nn4 = 20;

console.log(nn3); // -> 20
console.log(nn3--); // -> 20
console.log(nn3); // -> 19

console.log(nn4); // -> 20
console.log(--nn4); // -> 19
console.log(nn4); // -> 19

console.log(nn1++);//es interpretada como:
console.log(nn1);
nn1 = nn1 + 1;

let z = 10;

z += 2;
console.log(x); // -> 12
z -= 4;
console.log(x); // -> 8
z *= 3;
console.log(x); // -> 24
z /= 6;
console.log(x); // -> 4
z **= 3;
console.log(x); // -> 64
z %= 10;
console.log(x); // -> 4

//-----------------------------------Comparadores---------------------------\\
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

// Entonces, si el primer operando de AND (Y) es false, se devolverá y no se realizará ninguna otra verificación.

// Por el contrario, si el primer operando de OR (O) es true, se devolverá y no se realizará ninguna otra comprobación.
//  Esto acelera la ejecución del código, pero tiene un efecto secundario visible en este ejemplo:

let x1 = 0;
let y1 = 0;
console.log(x1++ && y1++); // -> 0
console.log(x1); // -> 1
console.log(y1); // -> y == 0

// La instrucción y++ nunca se ejecutará, lo que puede resultar confuso.

// Los operadores lógicos se suelen utilizar junto con los operadores condicionales, y son especialmente útiles en instrucciones condicionales
//  (toma de decisiones) y en bucles (condiciones de fin de ciclo). Puedes aprender sobre su aplicación práctica en las secciones sobre instrucciones 
//  condicionales y bucles.

//-----------------------------------Operador de asinación compuesta----------------------------\\
let sentence = "Happy New ";
sentence += "Year ";
sentence += 10191;
console.log(sentence); // -> Happy New Year 10191

// Para verificar si los operandos son iguales, podemos usar el operador de identidad (igualdad estricta) === o el operador de igualdad ==.
// El primero es más restrictivo y, para devolver verdadero, los operandos deben ser idénticos (es decir, deben ser iguales y del mismo tipo).

console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

//----------------------------Mayores que (>) con cadenas-----------------------\\
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true

console.log("ab" < "ab4"); // -> true
    
//Notas: 3.2.1.5 Otros operadores
//Notas: 3.2.1.7 Presedencia
