const mongoose = require('mongoose')
mongoose.Promise = Promise
const mongoURI = 'mongodb://localhost:27017/cookbooks_db'
const config = { useUnifiedTopology: true, useNewUrlParser: true}

mongoose.connect(mongoURI, config)

module.exports = mongoose




// OLD connection.js


// const mongoose = require('mongoose')
// mongoose.Promise = Promise

// mongoose.connect('mongodb://localhost:27017/cookbooks_db', { useNewUrlParser: true })