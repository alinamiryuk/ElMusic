const express = require('express')
const middleware = require('./middleware/index')

const app = express()
middleware(app)

const authRouter = require('./routes/auth')
const playlistRouter = require('./routes/playlist')
app.use('/api/auth', authRouter)
app.use('/api/playlist', playlistRouter)
module.exports = app

