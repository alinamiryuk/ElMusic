const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const issueJWT = require('../utils/issueJWT')
const passport = require('passport')

module.exports.signup = async function(req, res) {
  try {
    const {userName, email} = req.body
    const newUserNameCheck = await User.findOne({userName})
    const newUserEmailCheck = await User.findOne({email})
    if (newUserNameCheck) {
      res.status(409).json({
        message: 'User already exists. Change your username!',
      })
    } else if (newUserEmailCheck) {
      res.status(409).json({
        message: 'User already exists. Change your email!',
      })
    } else {
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      })
      await user.save()
      const token = issueJWT(user)
			res.status(200).json({
				success: true,
				token: token.token
			})
    }
  } catch (e) {
    errorHandler(e, res)
  }
}

module.exports.login = async function(req, res) {
  try {
    const {userName, password} = req.body
    await User.findOne({
      userName,
    }).then((user) => {
      if (!user) {
        res.status(401).json({success: false, msg: 'Could not find user!'})
      }
      if (bcrypt.compareSync(password, user.password)) {
        const tokenObject = issueJWT(user)
        res.status(200).json({
          success: true,
          token: tokenObject.token,
        })
      } else {
        res.status(401).
            json({success: false, msg: 'You entered the wrong password!'})
      }
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.check =
    passport.authenticate('jwt', {session: false}), (req, res) => {
  res.status(200).
      json({
        success: true,
        msg: 'You are successfully authenticated to this route!',
      })
}
