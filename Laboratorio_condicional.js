let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let opcion = window.prompt("Ingrese el numero de la opcion que desea\n 1.-Mostrar primer contacto\n 2.-Mostrar el ultimo contacto\n 3.-Añadir nuevo contacto")
let falta = true
    function faltaDato(dato){
        if(dato.length<=0){
            falta = false;
        }
    }
    
switch (opcion) {

    case "1":
        window.alert("Nombre: " + contacts[0].name + "\nTeléfono: " + contacts[0].phone + "\nE-mail: " + contacts[0].email)
        break;
    case "2":
        let last = contacts.length - 1;
        window.alert("Nombre: " + contacts[last].name + "\nTeléfono: " + contacts[last].phone + "\nE-mail: " + contacts[0].email)       
        break;
    case "3":
        let nombre = window.prompt("Ingresa el nombre del contacto: ","Paco el chato");
        let cel = window.prompt("Ingresa el celular del contacto: ","000-000-0000");
        let correo = window.prompt("Ingresa el correo del contacto","paco.chato@JavaScript.com")
        faltaDato(nombre)
        faltaDato(cel)
        faltaDato(correo)
        if(falta == true){
            contacts.push({name : nombre, phone : cel, email : correo })
            window.alert("Registro exitoso")
        }else{
            window.alert("Falta un dato para poder registrar al contacto")
        }
        
        break;
    default:
        window.alert("Ingrese una opción válida")
}
