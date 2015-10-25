var internal = require('./internal')
module.exports = internal.checkError(internal.createThrower, process.stderr)
