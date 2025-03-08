const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: [String],
    default: []
  }
})

const BlogModel = mongoose.model('Blog', blogSchema)
module.exports = BlogModel