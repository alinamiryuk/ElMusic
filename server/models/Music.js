const mongoose = require('mongoose')
const controller = require('../db/db-controller')

const Schema = mongoose.Schema
const {jazz, pop, rock, metal} = controller.getConnections
const musicSchema = Schema({
  author: String,
  genre: String,
  sub_genre: String,
  song_name: String,
  likeCounter: Number,
  dislikeCounter: Number,
  playlist: String,
  type: String,
  playTimes: String,
  data: Buffer
})

module.exports = {
  jazzModel: jazz.model('jazz', musicSchema),
  metalModel: metal.model('metal', musicSchema),
  rockModel: rock.model('rock', musicSchema),
  popModel: pop.model('pop', musicSchema)
}

