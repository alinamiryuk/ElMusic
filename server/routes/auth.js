const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')

router.post('/login', auth.login)

router.post('/signup', auth.signup)

router.get('/check', auth.check)

module.exports = router
