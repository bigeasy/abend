require('proof')(1, prove)

function prove (assert) {
    var abend = require('../..')
    try {
        abend(new Error('thrown'))
    } catch (error) {
        assert(error.message, 'thrown', 'caught')
    }
    try {
        abend(null, 1)
    } catch (error) {
        assert(false, 'should not do anything')
    }
}
