let alert= window.alert("¡Hola, Mundo!, por segunda ocasión");
console.log(alert)

/*El segundo cuadro de diálogo se denomina cuadro de diálogo confirm. 
Al igual que alert, es un método que acepta un parámetro opcional:
un mensaje que se mostrará.La diferencia entre alert y confirm es que el cuadro de 
diálogo confirm muestra dos botones, el botón Aceptar y el botón Cancelar.Dependiendo
del botón presionado por el usuario, el método confirm devuelve un valor booleano.
Se devuelve verdadero cuando el usuario cierra el cuadro de diálogo con el botón Aceptar y se
devuelve falso cuando el usuario presiona el botón Cancelar.*/

let decision = window.confirm("¿Está bien?");
console.log(decision);

/*Los valores verdadero o falso, devueltos por el método confirm como resultado de la decisión del usuario, 
permiten la ejecución condicional de algunas acciones del programa. En el siguiente ejemplo, también hemos 
utilizado un operador condicional aprendido recientemente:*/

let remove = confirm("¿Eliminar todos los datos?");
let message = remove ? "Eliminando Datos" : "Cancelado"

console.log(message);

//Muestra una ventana en el navegador pregutando tu nombre en una caja de texto, el segundo dato es el placeholder de la textbox
//El valor por default es anonimo en caso de que no se ingrese nada, si se cancela se pasa como nulo

/*El último de los cuadros de diálogo es el cuadro de diálogo prompt. Es un desarrollo posterior de la ventana emergente confirm. 
Al igual que el cuadro de diálogo confirm, contiene los botones Aceptar y Cancelar, pero también contiene un campo de texto de una 
sola línea que permite al usuario ingresar texto.

Al igual que con otros cuadros de diálogo, el prompt acepta un parámetro opcional como un mensaje que se mostrará. El prompt también 
acepta un segundo parámetro opcional, que es el valor predeterminado del campo de texto visible en la ventana de diálogo. Al igual que 
confirm, el método prompt devolverá un resultado que depende de la entrada del usuario.

Si el usuario cierra la ventana con el botón Aceptar, todo lo que se encuentre en el campo de texto se devolverá desde el método prompt 
como una cadena. Si el cuadro de diálogo se cierra con el botón Cancelar, el método devolverá un valor null. Debido a que al pulsar el 
botón Aceptar el valor devuelto será de tipo String, en ocasiones necesitaremos convertirlo a otro tipo, por ejemplo, a un tipo Number. 
Al igual que con todas las entradas de los usuarios, debemos estar preparados para el hecho de que los datos proporcionados por el usuario
pueden no ser válidos, ya sea por error o a propósito, por lo que siempre trata los valores ingresados con precaución.*/


let name = window.prompt("¿Cuál es tu nombre?", "Juan Pérez");
name = name ? name : "anónimo";

let age = prompt("Hola " + name + " ¿Cuántos años tienes?");
alert(name + " tiene " + age + " años");