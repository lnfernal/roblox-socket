const express = require('express')
const cors = require('cors')

const app = express()
.use(cors())

app.get('/', function (req, res) {
    res.send('GET request has been received.')
    console.log('a')
})