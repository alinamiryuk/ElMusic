const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')

module.exports.register = async function(req, res) {
 try {
 } catch (e) {
    errorHandler(e, res)
 }
}

module.exports.login = async function(req, res){
  try{

  }catch (e) {
    errorHandler(res, e)
  }
}


module.exports.logout = function(req, res) {
  req.logout()
  res.clearCookie('user_sid')
  res.status(200).json({
    message: 'user logout'
  })
}


