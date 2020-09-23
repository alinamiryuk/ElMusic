const http = require('http')
const app = require('./app')
const fs = require('fs').promises
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4200
const server = http.createServer(app)

server.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log('server is working on ', PORT)
})

process.on('uncaughtException', async() => {
  const files = await fs.readdir('/music')
  for (let i = 0; i < files.length; i ++) {
   await fs.unlink(`/music/${files[i]}.mp3`)
  }
  mongoose.disconnect()
  server.close()
})
process.on('SIGTERM', async () => {
  const files = await fs.readdir('/music')
  for (let i = 0; i < files.length; i ++) {
   await fs.unlink(`/music/${files[i]}.mp3`)
  }
  mongoose.disconnect()
  server.close()
})
