const express = require('express')

const router = express.Router()

//get all guests
router.get('/', (req, res) => {
    console.log(req.query.name);
    console.log(req.query);

    res.json({ mesage: 'all guests' })
})

//get a  guest by id or email
router.get('/id', (req, res) => {
    console.log(req.query);
    res.json({ mesage: 'guest by id' })
})

//get a  guest by email
router.get('/email/:email', (req, res) => {
    console.log(req.params);

    res.json({ mesage: 'guest by email' })
})


module.exports = router

