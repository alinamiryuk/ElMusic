const express = require('express')
const middleware = require('./middleware/index')

const app = express()
middleware(app)

const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)
module.exports = app

