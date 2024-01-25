/*La segunda forma de manejar errores en código asíncrono, es pasando una función callback a la función
asíncrona, y la función callback se llamará en caso de error, con el error como parámetro
*/
function getUser(id, callback) {
    // Simulación de una operación asincrónica que devuelve un usuario después de un tiempo de espera
    setTimeout(() => {
      const user = { id, name: "John Doe" };
      callback(null, user);
    }, 1000); // Simulando un retardo de 1 segundo
  }

  function getUserWithCallback(id, callback) {
    getUser(id, function(err, user) {
      if (err) {
        return callback(err);
      }
  
      if (!user) {
        return callback(new Error("No user found"));
      }
  
      callback(null, user);
    });
  }
   
getUserWithCallback(1, function(err, user) {
    if (err) {
        // handle the error
        logError(err)
    }
   
    const usuario = user
    console.log(`El usuario es ${usuario}`)
    /*Resto del código */
})

const logError = (error) => {
    console.error(error.message)
}

//https://sematext.com/blog/node-js-error-handling/