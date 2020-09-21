require('dotenv').config()
module.exports = {
  MONGODB_KEYS: {
    main: process.env.MAIN_KEY,
    jazz: process.env.JAZZ_KEY,
    pop: process.env.POP_KEY,
    metal: process.env.METAL_KEY,
    rock: process.env.ROCK_KEY
  }
}
