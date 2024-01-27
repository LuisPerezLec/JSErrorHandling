/*La segunda forma de manejar errores en código asíncrono, es pasando una función callback a la función
asíncrona, y la función callback se llamará en caso de error, con el error como parámetro
*/
/*Sin embargo, desde Node.js versión 8, se ha deprecado debido a que puede conducirte al "Callback Hell",
que se puede generar cuando se encadenan varias operaciones asíncronas (y se puede empezar a notar en
este código), por lo que lo más recomendable es utilizar promesas (folder rejecPromise).
*/
async function getUser(id, callback) {
  // Simulación de una operación asincrónica que devuelve un usuario después de un tiempo de espera
  setTimeout(() => {
    const user = { id, name: "John Doe" };
    callback(user);
    //callback(null)
  }, 1000); // Simulando un retardo de 1 segundo
}

function getUserWithCallback(id, callback) { //Función con callback que devuelve un error si no recibe un usuario
  getUser(id, function (user) { //Llama a la función asíncrona y le envía un callback con el que recibe al usuario
    if (!user) {
      return callback(new Error("No user found")); //Aquí se puede implementar los errores custom como el 404ApiError
    }

    callback(null, user); //Sí recibió un usuario, no devuelve error
  });
}

getUserWithCallback(1, function (err, user) { //Llamamos a la función, le enviamos el id del usuario a buscar, y el callback que recibirá ya sea al usuario, o un error.
  if (err) {
    // **Manejamos el error
    logError(err)
  }

  const { name } = user
  console.log(`El usuario es ${name}`)
  /*Resto del código */
})

const logError = (error) => { //Función para mostrar o manejar el error
  console.error(error.message)
}