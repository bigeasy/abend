require('proof')(3, prove)

function prove (okay, callback) {
    var internal = require('../internal')
    var stream = require('stream')
    var stderr = new stream.PassThrough

    try {
        internal.createThrower(new Error('thrown'), stderr)()
    } catch (error) {
        okay(stderr.read().toString(), 'WARNING: rethrowning caught error\n', 'stderr')
        okay(error.message, 'thrown', 'thrower')
    }

    var handler = internal.checkError(function (error) {
        return function () {
            okay(error.message, 'given', 'abended')
            callback()
        }
    }, stderr)

    handler()
    try {
        handler(new Error('given'))
    } catch (error) {
        // swallow error to test hedge.
    }
}
