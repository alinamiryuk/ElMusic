const mongoose = require('mongoose')

module.exports = (path) => {
  const connection = mongoose.createConnection(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }, (err) => {
    if (err) console.log(err)
  })

  connection.on('connected', () => {
    console.log('[1]Mongoose connection open to ' + route.split('/').pop())
  })

  connection.once('open', () => {
    console.log('[1]Connected to mongodb!')
  })

  connection.on('error', function(err) {
    console.error('[1]Mongoose default error: ' + err)
  })

  connection.on('disconnected', function() {
    console.log('[1]Mongoose default connection disconnected')
  })

  process.on('SIGINT', function() {
    connection.close(function() {
      console.log(
          '[1]Mongoose default connection disconnected through app termination')
    })
  })
  return connection

}
