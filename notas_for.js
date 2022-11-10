for (let i = 0; i < 10; i++) {
    console.log(i);
}

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
//--------------------------------While con For------------------------------------\\
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Ingresa otro nombre o presiona cancelar.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
//-----------------------------Ejemplo 2
let valuess = [10, 30, 50, 100];

for (let i = 0; i < valuess.length; i++) {
    console.log(valuess[i]); // -> 10, 30, 50, 100
}

for (let i = valuess.length - 1; i > 0; i--) {
    console.log(valuess[i]); // -> 100, 50, 30, 10
}

for (let i = 0; i < valuess.length; i += 2) {
    console.log(valuess[i]); // -> 10, 50
}
//--------------------------------For of------------------------------------\\
/*Entre corchetes después de la palabra for, no encontrarás tres campos separados por punto y coma. Hay una declaración de variable, 
seguida de la palabra of y luego un arreglo, cuyos elementos recorreremos (variable o literal). En nuestro ejemplo, 
for (let number of values) significa que la variable number contendrá los elementos subsiguientes del arreglo values en cada iteración.*/
let value = [10, 30, 50, 100];
let suma = 0;
for (let number of value) {
    suma += number;
}
console.log(suma); // -> 190

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "SÃ£o Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}
//--------------------------------For in------------------------------------\\
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);//-> name -> Calvin
};





