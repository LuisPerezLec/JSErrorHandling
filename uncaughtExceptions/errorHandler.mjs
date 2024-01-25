// errorHandler.mjs

import { BaseError } from "./baseError.mjs";
function logError (err) {
    console.error(err)
}
   
function logErrorMiddleware (err, req, res, next) {
    logError(err)
    next(err)
}
   
function returnError (err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message)
}
   
function isOperationalError(error) {
    if (error instanceof BaseError) {
        console.log(`El error es operacional: ${error.isOperational}`)
        return error.isOperational
    }
    return false
}
   
export { logError, logErrorMiddleware, returnError, isOperationalError};