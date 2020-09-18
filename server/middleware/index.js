module.exports = function (app) {
	const express = require('express')
	const mongoose = require('mongoose')
	const morgan = require('morgan')
	const passport = require('passport')
	const cors = require('cors')
	const session = require('express-session')
  const FileStore = require('session-file-store')(session)
  
	mongoose.connect('mongodb://localhost/spotify', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})

	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())
	app.use(passport.initialize())
	app.use(cors())

	app.use(morgan('dev'))

	app.use(
		session({
			store: new FileStore(),
			key: 'user_sid',
			secret: 'anything here',
			resave: false,
			saveUninitialized: false,
			cookie: {
				expires: 6000000,
			},
		})
	)
}
