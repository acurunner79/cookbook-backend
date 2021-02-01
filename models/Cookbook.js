

const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const cookbookSchema = new Schema({
    title: String,
    yearPublished: Number
})

const Cookbook = mongoose.model('Cookbook', cookbookSchema)
module.exports = Cookbook