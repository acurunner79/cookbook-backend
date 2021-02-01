const express = require('express')
const router = express.Router()
const Author = require('../models/Author')

// Write the route to list all authors
router.get('/', async (req, res) => {
    Author.find({}).populate("cookbooks").then(allAuthors => {
        res.json(allAuthors)
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to get authors by firstname
router.get('/:firstName', (req, res) => {
    Author.findOne({firstName: req.params.firstName})
    .then((author) => res.json({status: 200, author: author})
    )
    .catch(err => res.json({status: 400, err: err}))
})

// Write the route to create an author:
router.post('/', (req, res) => {
    const author = req.body
    Author.create(author)
    .then((author) => 
    res.json({status: 200, data: author})
    )
    .catch(err => res.json({status: 400, err: err}))
})

// Write the route to update an author
router.put('/:id', (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((author) =>
        res.json({status: 200, data: author})
    )
    .catch(err => res.json({status: 400, err: err}))
})

// Update the cookbook using Postman.
router.put('/:id/:cookbookId', (req, res) => {
    Cookbook.findByIdAndUpdate(req.params.cookbookId, req.body, {new: true}).then(() => {
        Cookbook.find({}).then(allCookbooks => {
            res.json(allCookbooks)
        }).catch(err => res.json({status: 400, err: err}))
    })
})

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)


module.exports = router