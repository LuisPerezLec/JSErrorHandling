/*Lanzar errores (convirtiendolos en excepciones), es la forma más común de manejar errores en node.js
para codigo síncrono.*/

/*La idea de este código, es atrapar el baseError a nivel de proceso con la función
process.on('uncaughtException'), sin embargo, no creo que esté funcionando como lo esperaba puesto que
en la consola no aparece la línea "Y el programa sigue", pero sí aparece la lína, "Exito, es operacional"
Esto parece indicar que el error fue capturado exitosamente a nivel de proceso, y se clasifico como
operacional, lo que no debería de detener la ejecución del hilo, sin embargo, como comenté anteriormente,
la línea "Y el programa sigue" no aparece.
*/

import process from "node:process";
import { logError, isOperationalError } from "./errorHandler.mjs";
import { BaseError } from "./baseError.mjs";

process.on('uncaughtException', error => {
    logError(error);

    if(!isOperationalError(error)) {
        console.log("Error no operacional")
        process.exit(1)
    }
    console.log("Exito, es operacional")
})

const user = /* await User.getUserById(req.params.id) */ null
if (user === null) {
 throw new BaseError(`Caught Error`, 404, true, 'No encontrado')
}

console.log("Y el programa sigue")
