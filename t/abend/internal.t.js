require('proof')(2, prove)

function prove (assert, callback) {
    var internal = require('../../internal')

    try {
        internal.createThrower(new Error('thrown'))()
    } catch (error) {
        assert(error.message, 'thrown', 'thrower')
    }

    var handler = internal.checkError(function (error) {
        assert(error.message, 'given', 'abended')
        callback()
    })

    handler()
    handler(new Error('given'))
}
