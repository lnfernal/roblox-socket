const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('GET request has been received.')
})