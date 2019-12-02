const {PORT} = require('./environment')
const connection = require('./connec')

module.exports = {
    PORT :PORT,
    connection: connection
}