const abf = require('async-break-finder')
const http = require('http')
const later = require('./later')

const server = http.createServer((req, res) => {
  const start = abf()
  later(() => {
    abf(start)
    res.end()
  })
}).listen(0, () => {
  const port = server.address().port
  http.get(`http://localhost:${port}`, (res) => {
    res.on('end', () => {
      server.close()
    })
    res.resume()
  })
})
