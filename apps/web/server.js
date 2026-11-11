const http = require('node:http')
const port = Number(process.env.PORT || 3000)
http.createServer((req, res) => { res.writeHead(200, {'content-type':'text/plain; charset=utf-8'}); res.end('web ok\n') }).listen(port, '0.0.0.0')
