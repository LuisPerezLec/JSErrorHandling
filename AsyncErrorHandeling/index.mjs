/*En código asíncrono, existen varias formas de manejar los errores, la primera, mostrada en este
archivo, es utilizar una estructura async await, con lo que conseguimos que código asíncrono se desempeñe
como código síncrono, y con un try catch manejamos el error.
*/

const getUser = async () => (12)

const getCart = async (user) => {
    if(user==12){
        return "Toothbrush"
    }
}

const cleanUp = async () => {
    console.log("Estoy limpiando!")
}

const anAsyncTask = async () => {
    try {
        const user = await getUser()
        const cart = await getCart(user)
   
        return cart
    } catch (error) {
        console.error(error)
    } finally {
        await cleanUp()
    }
}

console.log(await anAsyncTask())