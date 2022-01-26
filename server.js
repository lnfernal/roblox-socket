const express = require('express')
const cors = require('cors')

const server = express()
.use(cors())

server.get('/', function (req, res) {
    res.send('GET request has been received.')
    console.log('a')
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})