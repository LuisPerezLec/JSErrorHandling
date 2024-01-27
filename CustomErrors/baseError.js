// baseError.js

class BaseError extends Error {
    constructor (name, statusCode, isOperational, description) {
        super(description) //Llama al constructor de la clase de la cuál es extendido

        // Object.setPrototypeOf(this, new.target.prototype) //Creo que esto no se necesita
        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}
   
module.exports = BaseError