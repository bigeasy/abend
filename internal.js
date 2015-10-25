exports.checkError = function (createHandler, stderr) {
    return function (error) {
        if (error) {
            setImmediate(createHandler(error, stderr))
            throw error
        }
    }
}

exports.createThrower = function (error, stderr) {
    return function () {
        stderr.write('WARNING: rethrowning caught error\n')
        throw error
    }
}
