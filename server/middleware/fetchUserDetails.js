const jwt = require('jsonwebtoken')

const jwtToken = "A1b2C3d4E5F6g7H8i9J0K1l2M3n4O5P6q7R8s9T0U!V@W#X$Y%Z^a&"

const fetchUserDetails = (req, res, next) => {
  const success = false

  const token = req.header('Auth-Token')
  if (!token) {
    return res.status(401).json({ success, message: "Please Authenticate using a valid token" })
  }

  try {
    const decoded = jwt.verify(token, jwtToken)
    req.user = decoded.user
    next()
  }
  catch (error) {
    return res.status(401).json({ success, message: "Please Authenticate using a valid token" })
  }
}

module.exports = fetchUserDetails