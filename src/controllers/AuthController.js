const { User } = require('../models')
const crypto = require('crypto')
const jwt = require('../config/jwt')

module.exports = {
  async singin(req, res) {
    const [ hashType, hashAuth ] = req.headers.authorization.split(' ')
    let [ email, password ] = Buffer.from(hashAuth, 'base64').toString().split(':')

    const hash = (value) => {
      return crypto
              .createHash('md5')
              .update(value)
              .digest('hex')
      }

    const user = await User.findOne({
      where: { email, password: hash(password) }
    })
    if (!user) {
      return res.json({ error: 'Email ou senha incorretos.' })
    }
    const token = jwt.sign({ userId: user.id, userName: user.name })

    res.json({ token: token })
  }
}