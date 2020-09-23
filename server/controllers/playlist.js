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
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const {rockModel, metalModel, popModel, jazzModel} = require('../models/Music')

module.exports.createPlayList = async function(req, res) {
  const {likedAuthorsArray} = req.body
  try {
    const authorPlayLists = {
      type: 'authorPL',
      playlists: await generateAuthorsPlayList(likedAuthorsArray),
    }

    const [chillPlaylist, hardPlaylist, eliminated] = await generateMixPlaylist(
        likedAuthorsArray,
    )

    const moodPlaylist = {
      type: 'moodPL',
      playlists: [
        {
          type: 'Chill Playlist',
          songs: chillPlaylist,
        },
        {
          type: 'Hard Playlist',
          songs: hardPlaylist,
        },
      ],
    }

    const maybeInterestedPlaylists = {
      type: 'maybeInterested',
      playlists: await generateMaybeInterestedPlaylist(likedAuthorsArray,
          eliminated),
    }

    const genrePlaylists = {
      type: 'genre',
      playlists: await generateGenrePlaylists(likedAuthorsArray),
    }
    const user = await User.findOne({_id: req.user._id}, {playlists: 1})
    user.playlists.push(moodPlaylist, authorPlayLists, maybeInterestedPlaylists,
        genrePlaylists)
    await user.save()

    res.status(200).
        json({
          moodPlaylist,
          authorPlayLists,
          maybeInterestedPlaylists,
          genrePlaylists,
        })
  } catch (e) {
    errorHandler(e, res)
  }
}

module.exports.getAuthors = async function(req, res) {
  const authors = await Author.find({})
  res.status(200).json(authors)
}

module.exports.getUserPlayLists = async function(req, res) {
  const playlists = await User.findOne({_id: req.user._id}, {playlists: 1})
  res.status(200).json(playlists)
}

module.exports.getMusic = async function(req, res) {
  const {id} = req.params
  const {genre} = req.query
  let songBuffer
  switch (genre) {
    case 'Jazz':
      songBuffer = await jazzModel.findOne({_id: id})
      break
    case 'Rock':
      songBuffer = await rockModel.findOne({_id: id})
      break
    case 'Pop':
      songBuffer = await popModel.findOne({_id: id})
      break
    case 'Metal':
      songBuffer = await metalModel.findOne({_id: id})
      break
  }
  const songBase64 = songBuffer.data.toString('base64')
  res.json(songBase64)

}

