let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "egestas@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@vallis.edu"
    }];

 let nombre,celular,mail   
 
function validar(dato) {
    if (dato == null || dato == 0 || dato == "") {
        window.alert("Ingrese un valor para continuar");
        return valores
    }
}
function obtenerInsertar() {
    nombre = window.prompt("Ingrese el nombre del contacto", "Paco el chato");
    validar(nombre)
    celular = window.prompt("Ingrese el celular del contacto", "000-000-0000");
    validar(celular)
    mail = window.prompt("Ingrese el correo electrónico del contacto", "paco.elchato@javascript.com");
    validar(mail)

    contacts.push({ name : nombre , phone : celular , email : mail})
}


    
    obtenerInsertar()
    let last = contacts.length - 1;
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);