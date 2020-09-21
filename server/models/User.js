const mongoose = require('mongoose')
const controller = require('../db/db-controller')
const {main} = controller.getConnections

const Schema = mongoose.Schema
const userSchema = Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  playlist: [Object]
})
module.exports = main.model('user', userSchema)

