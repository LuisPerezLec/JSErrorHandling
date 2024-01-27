setTimeout(function() {
    console.log('Hello');
 }, 3000);
 

/* function getUserWithPromise(id) {
    return new Promise((resolve, reject) => {
        getUser(id, function (user) {
            if (!user) {
                return reject(new Error('No user found.')) //Aquí se puede utilizar un error custom como el 404ApiError
            }

            resolve(user)
        })
    })
}

getUserWithPromise(1)
    .then(user => {
        const user = user
        //Resto del código
    })
    .catch(error => {
        logError(error)
    }) */