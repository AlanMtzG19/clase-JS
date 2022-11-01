//--------------Imprimir valores de cada tipo
let booleano=false,numero=0,intgrande=120000000000n,cadena="",indef=undefined
const constru = String()

function imprimir(dato){
console.log(typeof dato +" "+dato)
}

imprimir(booleano)
imprimir(numero)
imprimir(intgrande)
imprimir(cadena)
imprimir(indef)
imprimir(constru)
//-------------------------Cadena de conversiones---------\
let variable ="1234"
imprimir(variable)
imprimir(Number(variable))
imprimir(BigInt(variable))
imprimir(Boolean(variable))
//------------------------Añadir valores dobles por linea-----------\\
booleano = true + false
numero = 1+2
intgrande = 120000n + 150000n
cadena="Hola "+"Mundo"
indef = undefined + undefined

console.log(booleano)
console.log(numero)
console.log(intgrande)
console.log(cadena)
console.log(indef)
//------------------------Sumar valores diferentes--------------\\
// booleano= true + 1
// numero = 1+"2"
// intgrande = 120000n + true
// cadena="Hola "+ 5
// indef = undefined + "defined"

//------------------------------Modificar const------------------\\
//Cadena original const str1 = String(42+"1")
const str1 = String(42+Number("1"))//Cadena modificada
console.log(str1)