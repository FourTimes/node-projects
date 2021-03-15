const express = require('express')
const router = express.Router()
const morgan = require("morgan");

const players = [
    { id: 1, name: 'JINO'}
]

router.get('/', (req, res) => {
    res.send(players);
})

module.exports = router;