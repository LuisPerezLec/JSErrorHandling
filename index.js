const error = new Error("An error message")
console.log(error.stack);

const Api404Error = require('./api404Error')

const user = /* await User.getUserById(req.params.id) */ null
if (user === null) {
 throw new Api404Error(`User with id: ID not found.`)
}