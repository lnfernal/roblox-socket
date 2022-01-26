const express = require('express')
const server = express()
const privatePartyHandler = require('./main.js')

server.get('/', function (req, res) {
    console.log(req)
    res.send()
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})