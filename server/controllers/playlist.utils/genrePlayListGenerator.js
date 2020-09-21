const {jazzModel, rockModel, popModel, metalModel} = require(
    '../../models/Music')

async function generateGenrePlaylists(likedAuthorsArray) {
  const genres = likedAuthorsArray.map(object => object.genre)
  const musicList = {}
  for (const genre of genres) {
    switch (genre) {
      case 'Jazz':
        musicList.jazz = await jazzModel.find({}, {data: 0})
        break
      case 'Pop':
        musicList.pop = await popModel.find({}, {data: 0})
        break
      case 'Metal':
        musicList.metal = await metalModel.find({}, {data: 0})
        break
      case 'Rock':
        musicList.rock = await rockModel.find({}, {data: 0})
        break
    }
  }
  return musicList
}

module.exports = generateGenrePlaylists
