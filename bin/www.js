//app entry. setting up server here
const http = require('http')
const app = require('../app')

const port = parseInt(process.env.PORT) || 3000
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
