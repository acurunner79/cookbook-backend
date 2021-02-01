
const mongoose = require('../db/connection')
const Cookbook = require('./Cookbook')

const Schema = mongoose.Schema

const authorSchema = new Schema({
     firstName: String,
     lastName: String,
     cookbooks: [{
        type: Schema.Types.ObjectId,
        ref: "Cookbook"
    }]
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author