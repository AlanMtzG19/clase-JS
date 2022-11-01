let numRosas = 70, numLirio = 50, numTulipan = 120
const rosas = 8, lirio = 10, tulipan = 2
let total
console.log("Rosa: precio unitario: " + rosas + " , cantidad: " + numRosas + " ,valor: " + (rosas * numRosas))
console.log("Lirio: precio unitario: " + lirio + " , cantidad: " + numLirio + " ,valor: " + (lirio * numLirio))
console.log("Tulipán: precio unitario: " + tulipan + " , cantidad: " + numTulipan + " ,valor: " + (tulipan * numTulipan))
total = (lirio * numLirio) + (rosas * numRosas) + (tulipan * numTulipan)
console.log("Total: " + total)

//Valores disminuidos
console.log("Precio con unidades cambiadas")
numRosas = numRosas - 20
numLirio = numLirio - 30

console.log("Rosa: precio unitario: " + rosas + " , cantidad: " + numRosas + " ,valor: " + (rosas * numRosas))
console.log("Lirio: precio unitario: " + lirio + " , cantidad: " + numLirio + " ,valor: " + (lirio * numLirio))
console.log("Tulipán: precio unitario: " + tulipan + " , cantidad: " + numTulipan + " ,valor: " + (tulipan * numTulipan))
total = (lirio * numLirio) + (rosas * numRosas) + (tulipan * numTulipan)
console.log("Total: " + total)


