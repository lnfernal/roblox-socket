const express = require('express')
const app = express()

const port = 8000

app.listen(port, function(){
    console.log(`started server at ${port}`)
})

app.get('/get', function (req, res) {
    res.send('GET request has been received.')
    console.log('a')
})