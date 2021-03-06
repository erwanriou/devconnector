const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path');
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express()

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())


// DB config
const db = require('./config/keys').keys

// Passport config
require('./config/passport')(passport)

// Connect to Mongodb
mongoose
  .connect(db.url(), db.options)
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.error(err))

//Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

// Server static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port =  process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
