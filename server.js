const express = require('express')
const cors = require('cors')

const app = express()
.use(cors())

app.listen(port, function(){
    console.log(`started server at ${port}`)
})

app.get('/', function (req, res) {
    res.send('GET request has been received.')
    console.log('a')
})