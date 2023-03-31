function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
   return function receivesAFunction(John) {
        console.log(John)
    }
}

function returnsAnAnonymousFunction() {
    return (Sarah) =>  {
        console.log(Sarah)
    }
}