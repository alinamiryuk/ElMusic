module.exports = function (app) {
	const express = require('express')
	const mongoose = require('mongoose')
	const morgan = require('morgan')
	const passport = require('passport')
	const cors = require('cors')
	const dbController = require('../db/db-controller')
	const dbConfig ={
		jazz: 'mongodb+srv://Flunt1k:spotify@cluster0.bmspk.mongodb.net/Jazz?retryWrites=true&w=majority',
		rock: 'mongodb+srv://Flunt1k:spotify@cluster0.cgxn4.mongodb.net/Rock?retryWrites=true&w=majority',
		metal: 'mongodb+srv://Flunt1k:spotify@cluster0.7spax.mongodb.net/Metal?retryWrites=true&w=majority',
		pop: 'mongodb+srv://Flunt1k:spotify@cluster0.mbvia.mongodb.net/Pop?retryWrites=true&w=majority',
	}

	const controller = new dbController(dbConfig)

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
	return controller
}
