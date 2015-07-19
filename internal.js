exports.checkError = function (createHandler) {
    return function (error) {
        if (error) {
            setImmediate(createHandler(error))
        }
    }
}

exports.createThrower = function (error) {
    return function () { throw error }
}
