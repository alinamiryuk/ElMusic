const express = require('express')
const playlist = require('../controllers/playlist')
const passport = require('passport')
const router = express.Router()

router.post('/', playlist.createPlayList)
router.get('/authors', passport.authenticate('jwt', {session: false}),playlist.getAuthors)

module.exports = router
