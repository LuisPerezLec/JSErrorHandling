/* try {
    throw new Error("Whoops!");             //Lanzar un nuevo objeto (instanciado de la clase Error)
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
} */

/* const error = new Error("An error message")  //Crear un nuevo error
console.log(error.stack); */                    //Mostrar la pila de archivos y funciones llamadas

const Api404Error = require('./api404Error')

//1.Custom errors to handle operational errors
const user = /* await User.getUserById(req.params.id) */ null
 if (user === null) {
 throw new Api404Error(`User with id: ID not found.`)
}

