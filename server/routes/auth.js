const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const crypto = require('crypto')
const UserModel = require('../models/User')
const fetchUserDetails = require('../middleware/fetchUserDetails')

const jwtToken = "A1b2C3d4E5F6g7H8i9J0K1l2M3n4O5P6q7R8s9T0U!V@W#X$Y%Z^a&"

// Regsiter a new user
router.post('/register', async (req, res) => {
  let success = false

  try {
    const { firstName, lastName, email, password } = req.body
    let user = await UserModel.findOne({ email: email })
    if (user) {
      return res.status(400).json({
        success,
        message: "User already exists!"
      })
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT_LENGTH))
    const hashedPassword = await bcrypt.hash(password, salt)

    user = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    })

    success = true
    return res.status(200).json({ success, message: "User Registered Successfully!" })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

// Login a user
router.post('/login', async (req, res) => {
  let success = false

  try {
    const { email, password } = req.body

    let user = await UserModel.findOne({ email: email })
    if (!user) {
      return res.status(400).json({
        success,
        message: "Invalid Credentials!"
      })
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if (!isPasswordMatched) {
      return res.status(400).json({
        success,
        message: "Invalid Credentials!"
      })
    }

    const payload = {
      user: {
        id: user._id
      }
    }

    const authToken = jwt.sign(payload, jwtToken)

    success = true
    return res.status(200).json({ success, authToken, message: "Logged in successfully!" })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

// Get user details from auth token
router.get('/getuser', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const userId = req.user.id
    const userDetails = await UserModel.findOne({ _id: userId }, { password: 0, __v: 0, _id: 0, date: 0 })

    success = true
    return res.status(200).json({ success, userDetails })
  }
  catch (error) {
    console.error(error.message)
    return res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

// Update user details
router.put('/updateuser', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const userId = req.user.id
    const { firstName, lastName } = req.body

    const newUserDetails = await UserModel.updateOne({ _id: userId }, { firstName, lastName })

    success = true
    return res.status(200).json({ success, message: "Details updated successfully!", newUserDetails })
  }
  catch (error) {
    console.error(error.message)
    return res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

module.exports = router