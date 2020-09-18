const express = require('express')
const middleware = require('./middleware/index')
const authRouter = require('./routes/auth')
const todoRouter = require('./routes/todo')
const app = express()

middleware(app)

app.use('/api/auth', authRouter)
app.use('/api/todos', todoRouter)

module.exports = app
