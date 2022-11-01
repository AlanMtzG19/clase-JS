
//---------------------------------Metodos de indices---------------------------\\

let str = "java script language";
// length: propiedad que devuelve el número de caracteres en una cadena.
console.log(str.length); // -> 20
console.log('test'.length); // -> 4
// charAt(Index): método que devuelve el carácter en la posición "Index" en las cadenas (los índices comienzan desde 0).
console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'
// slice(beginIndex, [opcional] endIndex): método que devuelve una nueva cadena que se crea a partir de los caracteres
// entre beginIndex (incluido) y endIndex (excluido); si se omite endIndex, entonces la nueva cadena es desde beginIndex
// hasta el final de la cadena.
console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'
// split(separator, [opcional] limit): método que divide la cadena en subcadenas cada vez que se encuentra un 
// separador en esa cadena y devuelve una arreglo de esas subcadenas (diremos algunas palabras sobre arreglos en un momento), 
// mientras que un límite opcional limit limita el número de subcadenas añadidas a la lista.
console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.'));  // -> ['192', '168', '1', '1']

//Los valores null son para los datos de tipo objeto