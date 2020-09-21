const connection = require('./db-connector')

class DbController {
  constructor() {
    this.mainConnection = null
    this.jazzConnection = null
    this.rockConnection = null
    this.metalConnection = null
    this.popConnection = null
  }

  start(config) {
    this.mainConnection = connection(config.main)
    this.jazzConnection = connection(config.jazz)
    this.rockConnection = connection(config.rock)
    this.metalConnection = connection(config.metal)
    this.popConnection = connection(config.pop)
  }

  get getConnections() {
    return {
      main: this.mainConnection,
      jazz: this.jazzConnection,
      rock: this.rockConnection,
      metal: this.metalConnection,
      pop: this.popConnection
    }
  }
}

const controller = new DbController()
module.exports = controller
