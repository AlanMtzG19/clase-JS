let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuera@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

/*El usuario puede optar por:

Mostrar el primer contacto (primero)
Mostrar el último contacto (último)
Mostrar todos los contactos (todos)
Añadir un nuevo contacto (nuevo)
Salir del programa (salir)*/
let cont =true
while (cont == true){
    let opcion = window.prompt("Ingrese la opción que desea:"+"\n1.- Mostrar el primer contacto"+
    "\n2.-Mostrar el último contacto"+"\n3.-Mostrar todos los contactos"+"\n4.- Añadir un nuevo contacto"+
    "\n5.- Salir del programa")
    switch(opcion){
        case "1":
            window.alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`)
            break;
        case "2": 
             let last = contacts.length - 1;
             window.alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`)
             break;
        case "3":
            for(let item of contacts){
                window.alert(`${item.name} / ${item.phone} / ${item.email}`)               
            }
            break;
        case "4":
            function validar(dato) {
                if (dato == null || dato == 0 || dato == "") {
                    window.alert("Ingrese un valor para continuar");
                    return valores
                }
            }
            function obtenerInsertar() {
                let  nombre = window.prompt("Ingrese el nombre del contacto", "Paco el chato");
                validar(nombre)
                let celular = window.prompt("Ingrese el celular del contacto", "000-000-0000");
                validar(celular)
                let mail = window.prompt("Ingrese el correo electrónico del contacto", "paco.elchato@javascript.com");
                validar(mail)
            
                contacts.push({ name : nombre , phone : celular , email : mail})
            }
            
            
                
                obtenerInsertar()    
                break;
        case "5":
            cont=false;
            window.alert("Hasta luego")
            break;
        default:
            window.alert("Opción no válida")
            break;
        }

}