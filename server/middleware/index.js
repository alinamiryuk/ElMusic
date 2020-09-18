module.exports = function(app) {
  const express = require('express')
  const mongoose = require('mongoose')
  const morgan = require('morgan')
  const passport = require('passport')

  mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  app.use(express.urlencoded({extended: true}))
  app.use(express.json())
  app.use(passport.initialize())


  app.use(morgan('dev'))
}

