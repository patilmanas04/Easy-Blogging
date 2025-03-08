const express = require('express')
const connectToMongoDB = require('./database')
const cors = require('cors')
const app = express()
const port = 4000

connectToMongoDB()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("Welcome to the Easy Bloggers!")
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/blog', require('./routes/blog'))

app.listen(port, () => {
  console.log(`Server is running on port ${port} - http://localhost:${port}`)
})