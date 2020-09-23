const  controller  = require('../db/db-controller')
const mongoose = require('mongoose')
const {main} = controller.getConnections
const Schema = mongoose.Schema

const authorSchema = Schema({
  author: String,
  genre: String,
  sub_genre: String,
  avatar: String
})

module.exports = main.model('author', authorSchema)
