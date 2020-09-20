const express = require('express')
const app = express()
const middleware = require('./middleware/index')
const authRouter = require('./routes/auth')

const controller = middleware(app)

app.use('/api/auth', authRouter)

module.exports = {app, controller}
