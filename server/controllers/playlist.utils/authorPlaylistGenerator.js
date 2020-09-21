const {jazzModel, rockModel, popModel, metalModel} = require('../../models/Music')

async function generateAuthorsPlayList(likedAuthorsArray) {
  const arrayOfAuthorMusic = []
  for (const object of likedAuthorsArray) {
    let authorSongs
    switch (object.genre) {
      case 'Jazz':
        authorSongs = await jazzModel.find({author: object.author}, {data: 0})
        break
      case 'Pop':
        authorSongs = await popModel.find({author: object.author}, {data: 0})
        break
      case 'Rock':
        authorSongs = await rockModel.find({author: object.author}, {data: 0})
        break
      case 'Metal':
        authorSongs = await metalModel.find({author: object.author}, {data: 0})
        break
    }
    arrayOfAuthorMusic.push({
      author: object.author,
      songs: authorSongs,
    })
  }
  return arrayOfAuthorMusic
}

module.exports = generateAuthorsPlayList
