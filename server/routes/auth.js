const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')
router.post('/login', auth.login)

router.post('/register', auth.register)

router.get('/check', auth.check)

module.exports = router
