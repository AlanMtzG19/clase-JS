let isUserReady = confirm("¿Estás listo?");
console.log(isUserReady);
if (isUserReady) {
    alert("¡Usuario listo!");
}

/*El valor que toma el shippingCost depende si se cumple la condicion, ya que si se cumple la condicion, se toma el valor de la izq, 
sino el de la derecha*/
let price = 100;
let shippingCost = price > 50 ? 0 : 5;

console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0
//Ejemplo 2, si se da en aceptar manda la alerta, sino manda el console log
let start = confirm("¿Iniciar?");
start ? alert("¡Aquí vamos!") : console.log("Abortado");
