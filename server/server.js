const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4200
const server = http.createServer(app)

server.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log('server is working on ', PORT)
})

process.on('uncaughtException', () => {
  server.close()
  mongoose.disconnect()
})
process.on('SIGTERM', () => {
  server.close()
  mongoose.disconnect()
})
