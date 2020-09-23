module.exports = function (app) {
	const express = require('express')
	const morgan = require('morgan')
	const passport = require('passport')
	const keys = require('../config/keys')
	const path = require('path')
	const cors = require('cors')
	const controller = require('../db/db-controller')
	const dbConfig ={
		main: keys.MONGODB_KEYS.main,
		jazz: keys.MONGODB_KEYS.jazz,
		rock: keys.MONGODB_KEYS.rock,
		metal: keys.MONGODB_KEYS.metal,
		pop: keys.MONGODB_KEYS.pop,
	}
	controller.start(dbConfig)

	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())
	app.use(express.static(path.join(__dirname, '..', 'public')))
	app.use(passport.initialize())
	require('../config/passport')
	app.use(cors())

	app.use(morgan('dev'))
}
