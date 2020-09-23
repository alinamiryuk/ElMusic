const {jazzModel, rockModel, popModel, metalModel} = require(
    '../../models/Music')

async function generateGenrePlaylists(likedAuthorsArray) {
  const genres = [...new Set(likedAuthorsArray.map(object => object.genre))]
  const musicList = []
  for (const genre of genres) {
    let music, type;
    switch (genre) {
      case 'Jazz':
        type = 'Jazz'
        music = await jazzModel.find({}, {data: 0})
        break
      case 'Pop':
        type = 'Pop'
        music = await popModel.find({}, {data: 0})
        break
      case 'Metal':
        type = 'Metal'
        music = await metalModel.find({}, {data: 0})
        break
      case 'Rock':
        type = 'Rock'
        music = await rockModel.find({}, {data: 0})
        break
    }
    musicList.push({
      type,
      music
    })
  }
  return musicList
}

module.exports = generateGenrePlaylists
