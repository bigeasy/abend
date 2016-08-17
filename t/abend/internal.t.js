require('proof/redux')(3, prove)

function prove (assert, callback) {
    var internal = require('../../internal')
    var stream = require('stream')
    var stderr = new stream.PassThrough

    try {
        internal.createThrower(new Error('thrown'), stderr)()
    } catch (error) {
        assert(stderr.read().toString(), 'WARNING: rethrowning caught error\n', 'stderr')
        assert(error.message, 'thrown', 'thrower')
    }

    var handler = internal.checkError(function (error) {
        return function () {
            assert(error.message, 'given', 'abended')
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
