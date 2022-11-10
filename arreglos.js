let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined

//-------------------Agregar valores a un array----------------\\
let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat

//----------------------Obtener valores por index----------------\\
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

//------------------------Arreglos de objetos------------------------\\
let users = [
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name); // -> Calvin
console.log(users[1].age); // -> 21
//----------------Agregar datos a un arreglo de objetos---------------\\
users[2] = {
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"

}

console.log(users[0].name); // -> Calvin
console.log(users[1].name); // -> Mateus
console.log(users[2].name); // -> Irene
//El comando instanceof nos indica si la variable a la que se le está aplicando
//es o no un arreglo
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false
//Te puedes saltar los indices del arreglo si ingresas un valor en un indice que no sea consecutivo
let namess  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(namess.length); // -> 4

namess[5] = "Amelia";
console.log(namess.length); // -> 6

console.log(namess); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(namess[3]); // -> Samuel
console.log(namess[4]); // -> undefined
console.log(namess[5]); // -> Amelia
//---------------------IndexOf nos dice cual es el indice del valor que se le pasa como parámetro en un arreglo
let Names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(Names.indexOf("Mateo")); // -> 2
console.log(Names.indexOf("Victor")); // -> -1

//El metodo push 
/*El método push coloca el elemento dado como su argumento
 al final del arreglo. La longitud del arreglo aumenta en 1 y el nuevo elemento se inserta a 
 la derecha (tiene el índice más grande de todos los elementos).*/

let namess = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(namess.length); // -> 4

namess.push("Amelia");
console.log(namess.length); // -> 5
console.log(namess); // - > ["Olivia", "Emma", "Mateo","Samuel", "Amelia"]
    