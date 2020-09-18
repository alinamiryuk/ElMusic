const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const issueJWT = require('../utils/issueJWT')

module.exports.register = async function (req, res) {
	try {
		const { userName, email } = req.body
		const newUserNameCheck = await User.findOne({ userName })
		const newUserEmailCheck = await User.findOne({ email })
		if (newUserNameCheck) {
			res.status(409).json({
				message: 'User already exists. Change your username!',
			})
		} else if (newUserEmailCheck) {
			res.status(409).json({
				message: 'User already exists. Change your email!',
			})
		} else {
			await User.create({
				userName: req.body.userName,
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 10),
			}).then((user) => {
				res.json({ success: true, user: user })
			})
		}
	} catch (e) {
		errorHandler(e, res)
	}
}

module.exports.login = async function (req, res) {
	try {
		const { userName, password } = req.body
		await User.findOne({
			userName,
		}).then((user) => {
			if (!user) {
				res.status(401).json({ success: false, msg: 'could not find user' })
			}
			if (bcrypt.compareSync(password, user.password)) {
				const tokenObject = issueJWT(user)
				res.status(200).json({
					success: true,
					token: tokenObject.token,
					expiresIn: tokenObject.expires,
				})
			} else {
				res
					.status(401)
					.json({ success: false, msg: 'you entered the wrong password' })
			}
		})
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.logout = async function (req, res) {
	// if (req.session.user) {
	// 	await req.session.destroy()
	// 	res.clearCookie('user_sid')
	// 	res.redirect('/auth/registr')
	// }
	// req.logout()
	// res.clearCookie("user_sid")
	// res.status(200).json({
	// 	message: "user logout",
	// })
}
