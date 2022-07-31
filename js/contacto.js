//Armo datos de la persona con un constructor

function Persona(nombre,mail,mensaje) {
    this.name= nombre
    this.email = mail
    this.message = mensaje
    this.bienvenida = function(recibir){console.log ("Hola"+ this.name)}
}

const persona1 = new Persona ("Belen", "belenallende@hotmail.com", "gracias x su servicio")
const persona2 =new Persona ("Inaki", "inakiallende@gmail.com", "feo servicio el suyo")

