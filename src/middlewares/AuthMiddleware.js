const { User } = require('../models')
const jwt = require('../config/jwt')

module.exports = {
  async authUser(req, res, next) {
    try {
      const [, token] = req.headers.authorization.split(' ')

      const payload = await jwt.verify(token)
      const result = await User.findByPk(payload.userId)
      
      if (!result) {
        return res.status(401).json({ error: 'Não autorizado.' })
      }

      const { password, ...user } = result.dataValues

      req.auth = user

      next()
    } catch(error) {
      return res.status(401).json({ error: 'Não autorizado.' })
    }
  },

  async authAdmin(req, res, next) {
    try {
      const [, token] = req.headers.authorization.split(' ')

      const payload = await jwt.verify(token)
      const result = await User.findByPk(payload.userId)

      if (!result || !result.is_admin) {
        return res.status(401).json({ error: 'Área restrita para admin.' })
      }

      const { password, ...admin } = result.dataValues

      req.auth = admin

      next()
    } catch(error) {
      return res.status(401).json({ error: 'Área restrita para admin.' })
    }
  }
}