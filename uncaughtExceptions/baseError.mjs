// baseError.mjs

class BaseError extends Error {
    constructor (name, statusCode, isOperational, description) {
        super(description)

        // Object.setPrototypeOf(this, new.target.prototype) //Creo que esto no se necesita
        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}

export { BaseError };