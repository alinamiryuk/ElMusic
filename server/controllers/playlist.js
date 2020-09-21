const generateAuthorsPlayList = require(
    './playlist.utils/authorPlaylistGenerator',
)
const generateMixPlaylist = require('./playlist.utils/mixPlaylistGenerator',
)
const generateMaybeInterestedPlaylist = require(
    './playlist.utils/maybeInterestedGenerator',
)
const generateGenrePlaylists = require(
    './playlist.utils/genrePlayListGenerator',
)

const Author = require('../models/Author')

module.exports.createPlayList = async function(req, res) {
  const {likedAuthorsArray} = req.body

  const authorPlayLists = {
    type: 'authorPL',
    playlists: await generateAuthorsPlayList(likedAuthorsArray),
  }

  const [chillPlaylist, hardPlaylist, eliminated] = await generateMixPlaylist(
      likedAuthorsArray,
  )

  const moodPlaylist = {
    type: 'moodPL',
    playlists: {
      chillPlaylist,
      hardPlaylist,
    },
  }

  const maybeInterestedPlaylists = {
    type: 'maybeInterested',
    playlists: await generateMaybeInterestedPlaylist(likedAuthorsArray,
        eliminated),
  }

  const genrePlaylists = await generateGenrePlaylists(likedAuthorsArray)

  res.status(200).
      json({
        moodPlaylist,
        authorPlayLists,
        maybeInterestedPlaylists,
        genrePlaylists,
      })
}

module.exports.getAuthors = async function(req, res){
  const authors = await Author.find({})
  res.status(200).json(authors)
}

