/*Trata de organizar el código de tu programa usando funciones. Define y llama a tres funciones en los lugares apropiados:

showContact: la función debe tomar dos argumentos; el primero es la lista de contactos y el segundo 
es el número de índice del contacto a mostrar; dentro de la función, verifica si se pasan los argumentos correctos, 
es decir, si los contactos son un arreglo (utiliza la construcción instanceofArray para esto).

showAllContacts: la función debe tomar un argumento, la lista de contactos; dentro de la función, verifica si 
el argumento dado es un arreglo.

addNewContact: la función debe tomar cuatro argumentos, una lista de contactos y los datos del nuevo contacto, 
es decir: nombre, teléfono y número; antes de agregar un nuevo contacto, verifica si el argumento pasado es un arreglo y
si los datos del nuevo contacto tienen algún valor.*/

 let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

function showContact(array,a){

   if(Array.isArray(array)==true && Number.isInteger(a)){
    console.log(`${array[a].name} / ${array[a].phone} / ${array[a].email}`);
   }
}

function showAllContacts(array){
    if(Array.isArray(array)==true){
        for(i=0;i<=array.length-1;i++){
            console.log(`${array[i].name} / ${array[i].phone} / ${array[i].email}`);
        }
    }
}

function addNewContact(array,nombre,celular,correo){
        if(!Array.isArray(array) || nombre.toString()=="" || celular.toString()=="" ||correo.toString()==""){
            console.log("Datos faltantes");
            return;
        }
        array.push({name : nombre, phone: celular, email : correo})
}

addNewContact(contacts,"Edward Thompson","888-999-7777","edward.thompson@JavaScript.com")
showAllContacts(contacts)

