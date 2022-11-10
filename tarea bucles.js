//--------------------------------Ejercicio 1------------------\\
/*Escribe un fragmento de código que escriba números del 100 al 0 en la consola, 
pero en pasos de 10 en 10; entonces sería 100, 90, 80... etc.*/
let numeros = 0
for(i=1;i<11;i++){
    numeros = numeros +10
    console.log(numeros)
}

//--------------------------------Ejercicio 2------------------\\
/*Modifica el programa anterior para que le pida al usuario el primer y último número a 
usar en lugar de 100 y 0 (pista: use el cuadro de diálogo prompt). Comprueba si los valores introducidos 
son correctos (que el valor inicial sea mayor que el valor final).*/
let valorInicial = window.prompt("Ingresa el primer numero de la iteración")
let valorFinal = window.prompt("Ingresa el valor final de la iteración")
let numeros2 = 0
if((valorInicial==valorFinal)){
    window.alert("Los valores deben ser diferentes")
    this.close
}

for(i=valorInicial;i<valorFinal;i++){
    numeros2 = numeros2+10
    console.log(numeros2)
}

//--------------------------------Ejercicio 3------------------\\

//Hay diez números diferentes en este arreglo:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

/*Escribe un programa que primero escriba todos estos números en la consola, 
luego solo los que son pares (pista: el residuo de dividir un número par entre 2 es igual a 0),
luego solo los que son mayores que 10 y al mismo tiempo menor que 60.*/
for (let imp of numbers){
    console.log(imp)
}


for (let prtPar of numbers){
    const va = 2
    let res = prtPar % va
    if(res == 0){
        console.log(prtPar)
    }
}

for (let impMay of numbers){
    if(impMay>10 && impMay<60){
        console.log(impMay)
    }
}

//--------------------------------Ejercicio 4------------------\\
/*Escribe un programa utilizando un bucle que le pida al usuario el nombre de una película 
(primer cuadro de dialogo) y su calificación de www.imdb.com (segundo cuadro de dialogo).
 El programa te permitirá ingresar tantas películas como desees en el arreglo de películas. 
 Cada elemento del arreglo será un objeto, que constará de dos campos: título e imdb. La entrada se completa 
 si el usuario presiona Cancelar en el cuadro de diálogo. Luego, el programa debe imprimir primero en la consola 
 todas las películas que tienen una calificación inferior a 7, luego aquellas cuya calificación sea mayor o igual a 7. 
 Escribe el nombre de la película y su calificación uno al lado del otro, por ejemplo:*/
//Perdido en la Selva (7.7)
let continuar = true
let arreglo =[]
while(continuar==true){
    let peli = window.prompt("Ingresa el nombre de la pelicula")
    let calif = window.prompt("Ingresa la calificacion de IMDB")
    if(peli.length<=0 || calif.length<=0){
        window.alert("Debes ingresar todos los campos")
        return;
    }else{
        arreglo.push({titulo : peli, imbd : calif})
        let pregunta = window.confirm("Deseas seguir agregando peliculas?")
        if (pregunta==true){
            continuar=true
        }else{
            continuar=false
        }
    }
}

console.log("Peliculas con calificación mayor a 7")
for(let movie of arreglo ){
    if(movie.imbd>7){
     console.log(movie.titulo+" "+movie.imbd)
    }
 }

 console.log("Peliculas con calificación menor a 7")
for(let movie of arreglo ){
    if(movie.imbd<7){
     console.log(movie.titulo+" "+movie.imbd)
    }
 }

 //--------------------------------Ejercicio 5------------------\\
/*El contenido del objeto que describe la posición del barco llamado "Mareno" se muestra en la consola.
Completa el codigo para que la salida sea igual

LATITUD -> 40.07288 
LONGITUD -> 154.48535 
CURSO -> 285.6 
VELOCIDAD -> 14.0 
OMI -> 9175717 
NOMBRE -> MARENO*/
let vessel =  {LATITUD: 40.07288, LONGITUD: 154.48535, CURSO: 285.6, VELOCIDAD: 14.0, OMI: 9175717, NOMBRE: "MARENO" }
 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`);
}
