
valores()


function validar(dato){
    if(dato==null || dato==0 || dato == ""){
        window.alert("Ingrese un valor para continuar");
        return valores
    }
}
function valores(){
    let ancho = window.prompt("Ingrese el ancho de la caja", "0");
    validar(ancho)
    let altura = window.prompt("Ingrese la altura de la caja", "0");
    validar(altura)
    let largo = window.prompt("Ingrese el largo de la caja", "0");
    validar(largo)  
    mostrarVolumen(ancho,altura,largo)
}
          
function mostrarVolumen(anc,alt,lar){
    let total = anc*alt*lar
    window.alert("El volumen de la caja es de: " + total);
}
