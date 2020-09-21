const express = require('express')
const playlist = require('../controllers/playlist')
const router = express.Router()

router.post('/', playlist.createPlayList)
router.get('/authors', playlist.getAuthors)

module.exports = router
