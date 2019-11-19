const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
  //get token from header request
  const token = req.header('x-auth-token')
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtToken'))
    req.user = decoded.user

    next()
  } catch (err) {
    res.status(401).json({ msg: 'Token not valid' })
  }
}
