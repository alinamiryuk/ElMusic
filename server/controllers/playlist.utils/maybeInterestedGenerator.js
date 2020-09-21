const {jazzModel, rockModel, popModel, metalModel} = require(
    '../../models/Music')

async function generateMaybeInterestedPlaylist(likedAuthorsArray, eliminated) {
  const maybeInterested = []
  for (const genre in eliminated) {
    if (eliminated.hasOwnProperty(genre)) {
      for (const object of eliminated[genre]) {
        let songs
        switch (genre) {
          case 'Jazz':
            songs = await jazzModel.find({author: object.author}, {data: 0})
            break
          case 'Pop':
            songs = await popModel.find({author: object.author}, {data: 0})
            break
          case 'Rock':
            songs = await rockModel.find({author: object.author}, {data: 0})
            break
          case 'Metal':
            songs = await metalModel.find({author: object.author}, {data: 0})
            break
        }
        maybeInterested.push({
          author: object.author,
          songs
        })
      }
    }
  }
  return maybeInterested
}

module.exports = generateMaybeInterestedPlaylist
