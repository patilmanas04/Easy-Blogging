const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const crypto = require('crypto')
const UserModel = require('../models/User')
const fetchUserDetails = require('../middleware/fetchUserDetails')
const BlogModel = require('../models/Blog')

const jwtToken = "A1b2C3d4E5F6g7H8i9J0K1l2M3n4O5P6q7R8s9T0U!V@W#X$Y%Z^a&"

// Create Blog
router.post('/createpost', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const { title, body } = req.body
    const userId = req.user.id
    const userDetails = await UserModel.findOne({ _id: userId }, { password: 0, __v: 0, _id: 0, date: 0 })

    const blog = await BlogModel.create({
      userId,
      name: userDetails.firstName + " " + userDetails.lastName,
      title,
      body
    })

    success = true
    return res.status(200).json({ success, message: "Blog Created Successfully!" })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

router.get('/getmyposts', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const userId = req.user.id

    const blogs = await BlogModel.find({ userId }, { __v: 0, date: 0 })
    success = true

    return res.status(200).json({ success, blogs })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

router.delete('/deletepost/:id', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const userId = req.user.id
    const blogId = req.params.id

    const blog = await BlogModel.findOne({ _id: blogId })
    if (!blog) {
      return res.status(400).json({
        success,
        message: "Blog not found!"
      })
    }

    if (blog.userId.toString() !== userId) {
      return res.status(401).json({
        success,
        message: "You are not authorized to delete this blog!"
      })
    }

    await BlogModel.deleteOne({ _id: blogId })

    success = true
    return res.status(200).json({ success, message: "Blog Deleted Successfully!" })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

router.put('/updatepost/:id', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const userId = req.user.id
    const blogId = req.params.id
    const { title, body } = req.body

    const blog = await BlogModel.findOne({ _id: blogId })
    if (!blog) {
      return res.status(400).json({
        success,
        message: "Blog not found!"
      })
    }

    if (blog.userId.toString() !== userId) {
      return res.status(401).json({
        success,
        message: "You are not authorized to update this blog!"
      })
    }

    await BlogModel.updateOne({ _id: blogId }, { title, body })

    success = true
    return res.status(200).json({ success, message: "Blog Updated Successfully!" })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

router.get('/getallposts', async (req, res) => {
  let success = false

  try {
    const blogs = await BlogModel.find({}, { __v: 0, date: 0 })
    success = true

    return res.status(200).json({ success, blogs })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

router.post('/likepost/:id', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const userId = req.user.id
    const blogId = req.params.id

    const blog = await BlogModel.findOne({ _id: blogId })
    if (!blog) {
      return res.status(400).json({
        success,
        message: "Blog not found!"
      })
    }

    if (blog.likes.includes(userId)) {
      return res.status(400).json({
        success,
        message: "You have already liked this blog!"
      })
    }

    await BlogModel.updateOne({ _id: blogId }, { $push: { likes: userId } })

    success = true
    return res.status(200).json({ success, message: "Blog Liked Successfully!" })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

router.post('/unlikepost/:id', fetchUserDetails, async (req, res) => {
  let success = false

  try {
    const userId = req.user.id
    const blogId = req.params.id

    const blog = await BlogModel.findOne({ _id: blogId })
    if (!blog) {
      return res.status(400).json({
        success,
        message: "Blog not found!"
      })
    }

    await BlogModel.updateOne({ _id: blogId }, { $pull: { likes: userId } })

    success = true
    return res.status(200).json({ success, message: "Blog Unliked Successfully!" })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).json({
      success,
      message: "Internal Server Error!"
    })
  }
})

module.exports = router