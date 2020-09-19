const connection = require('./db-connector')

class DbController {
  constructor() {
    this.jazzConnection = null
    this.rockConnection = null
    this.metalConnection = null
    this.popConnection = null
  }

  start(config) {
    this.jazzConnection = connection(config.jazz)
    this.rockConnection = connection(config.rock)
    this.metalConnection = connection(config.metal)
    this.popConnection = connection(config.pop)
  }

  get getConnections() {
    return {
      jazz: this.jazzConnection,
      rock: this.rockConnection,
      metal: this.metalConnection,
      pop: this.popConnection
    }
  }
}

module.exports = DbController
