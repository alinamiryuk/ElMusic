
const controller = require('../db/db-controller')
const {main} = controller.getConnections
module.exports = main.model('user', {
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
})

