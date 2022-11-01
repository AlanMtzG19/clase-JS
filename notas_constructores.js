//---------------------------------------------Constructores---------------------------\\
const str1 = String();
const num = Number();
const bool = Boolean();

console.log(str1); // ->
console.log(num); // -> 0
console.log(bool); // -> false

const big1 = BigInt(42);
console.log(big1); // -> 42n

const big2 = BigInt();   // -> Uncaught TypeError: Cannot convert undefined to a BigInt




