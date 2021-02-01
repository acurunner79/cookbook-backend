const express = require('express')
const router = express.Router()

// Require the Cookbook controller.
const Cookbook = require('../models/Cookbook')

// Write the route to list all cookbooks
router.get('/', (req, res) => {
        Cookbook.find({}).then(allCookbooks => {
        res.json(allCookbooks)
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to get cookbook by title
router.get('/:title', (req, res) => {
    Cookbook.findOne({title: req.params.title})
    .then((cookbook) => res.json({status: 200, cookbook: cookbook})
    )
    .catch(err => res.json({status: 400, err: err}))
})

// Write the route to get cookbook by year published
router.get('/year/:yearPublished', (req, res) => {
    Cookbook.findOne({yearPublished: req.params.yearPublished})
    .then((cookbook) => res.json({status: 200, cookbook: cookbook})
    )
    .catch(err => res.json({status: 400, err: err}))
})

// Write the route to create a cookbook
router.post('/', (req, res) => {
    const cookbook = req.body
    Cookbook.create(cookbook)
    .then((cookbook) => 
    res.json({status: 200, data: cookbook})
    )
    .catch(err => res.json({status: 400, err: err}))
})

// Write the route to update a cookbook
router.put('/:id', (req, res) => {
    Cookbook.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((cookbook) =>
        res.json({status: 200, data: cookbook})
    )
    .catch(err => res.json({status: 400, err: err}))
})

// Write the route to delete the cookbook by title
router.delete('/:title', (req,res) => {
    Cookbook.findOneAndDelete({})
    .then((cookbook) => 
    res.json({status: 200, msg: 'item deleted'})
    )
    .catch(err => res.json({status: 400, err: err}))
})


module.exports = router;