const http = require('http')

const server = http.createServer((req, res) => {
  res.end()
}).listen(0, () => {
  const port = server.address().port
  http.get(`http://localhost:${port}`, (res) => {
    res.on('end', () => {
      server.close()
    })
    res.resume()
  })
})
