const {jazzModel, rockModel, popModel, metalModel} = require('../../models/Music')

async function generateMixPlaylist(likedAuthorsArray) {
  const chillPlaylist = []
  const hardPlaylist = []
  const authorsForException = likedAuthorsArray.map(object => object.author)
  const authorsForPlaylist = {
    chill: [],
    hard: [],
  }
  const eliminatedAuthors = {
    'Jazz': [],
    'Pop': [],
    'Rock': [],
    'Metal': [],
  }
  likedAuthorsArray.forEach(object => {
    if (authorsForPlaylist.chill.length >= 3 ||
        authorsForPlaylist.hard.length >= 3) {
      eliminatedAuthors[object.genre].push(object)
      return
    }
    if (object.genre === 'Jazz' || object.genre === 'Pop') {
      authorsForPlaylist.chill.push(object)
    } else {
      authorsForPlaylist.hard.push(object)
    }
  })

  await addAuthorsSongs(authorsForPlaylist, [chillPlaylist, hardPlaylist])
  if (chillPlaylist.length !== 9) {
    await addOtherSongs(authorsForException, 'chill', chillPlaylist)
  } else if (hardPlaylist.length !== 9) {
    await addOtherSongs(authorsForException, 'hard', hardPlaylist)
  }
  return [chillPlaylist, hardPlaylist, eliminatedAuthors]
}

async function addAuthorsSongs(authorsForPlaylist, playlists) {
  for (const object of authorsForPlaylist.chill) {
    let songs
    switch (object.genre) {
      case 'Jazz':
        songs = await jazzModel.find({author: object.author}, {data: 0})
        break
      case 'Pop':
        songs = await popModel.find({author: object.author}, {data: 0})
        break
    }
    addThreeRandomSongs(songs, playlists[0])
  }
  for (const object of authorsForPlaylist.hard) {
    let songs
    switch (object.genre) {
      case 'Metal':
        songs = await metalModel.find({author: object.author}, {data: 0})
        break
      case 'Rock':
        songs = await rockModel.find({author: object.author}, {data: 0})
        break
    }
    addThreeRandomSongs(songs, playlists[1])
  }
}

async function addOtherSongs(exceptions, type, playlist) {
  let combine
  if (type === 'chill') {
    const jazzMusic = await jazzModel.find({author: {$nin: exceptions}}, {data: 0})
    const popMusic = await popModel.find({author: {$nin: exceptions}}, {data: 0})
     combine = [...jazzMusic, ...popMusic].sort(() => Math.random() - 0.5)
  } else {
    const rockMusic = await rockModel.find({author: {$nin: exceptions}}, {data: 0})
    const metalMusic = await metalModel.find({author: {$nin: exceptions}}, {data: 0})
    combine = [...rockMusic, ...metalMusic].sort(() => Math.random() - 0.5)
  }
  while (playlist.length !== 9) {
    const rnd = Math.floor(Math.random() * combine.length)
    playlist.push(...combine.splice(rnd, 1))
  }
}

function addThreeRandomSongs(songs, playlist) {
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * songs.length)
    playlist.push(...songs.splice(randomNumber, 1))
  }
}

module.exports = generateMixPlaylist
