const jwt = require('jsonwebtoken')

const secret = 'chave secreta.'

module.exports = {
  sign: payload => jwt.sign(payload, secret, { expiresIn: 86400 }),
  verify: token => jwt.verify(token, secret)
}