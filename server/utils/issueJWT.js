const jsonwebtoken = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const pathToKey = path.join(__dirname, '..', '..', 'id_rsa_priv.pem')
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8')

function issueJWT(user) {
	const _id = user._id

	const payload = {
		sub: _id,
	}

	const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
		expiresIn: '1d',
		algorithm: 'RS256',
	})

	return {
		token: 'Bearer ' + signedToken,
	}
}

module.exports = issueJWT
