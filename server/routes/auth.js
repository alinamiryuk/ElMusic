const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../controllers/auth')
router.post('/login', auth.login)

router.post('/register', auth.register)

router.get('/logout', auth.logout)

router.get('/check', auth.check)


module.exports = router
