const generateAuthorsPlayList = require(
    './playlist.utils/authorPlaylistGenerator')
const generateMixPlaylist = require('./playlist.utils/mixPlaylistGenerator')

module.exports.createPlayList = async function(req, res) {
  const {likedAuthorsArray} = req.body
  const authorsPlayList = await generateAuthorsPlayList(likedAuthorsArray)
  const [chillPlaylist, hardPlaylist] = await generateMixPlaylist(
      likedAuthorsArray)

  res.status(200).json({chillPlaylist, hardPlaylist, authorsPlayList})
}

