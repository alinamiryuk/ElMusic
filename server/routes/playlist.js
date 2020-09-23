const express = require('express')
const playlist = require('../controllers/playlist')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), playlist.getUserPlayLists)
router.post('/', passport.authenticate('jwt', {session: false}), playlist.createPlayList)
router.get('/authors', passport.authenticate('jwt', {session: false}),playlist.getAuthors)
router.get('/:id', passport.authenticate('jwt', {session: false}), playlist.getMusic)


module.exports = router
