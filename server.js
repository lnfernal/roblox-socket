const express = require('express');
const server = express();

const PrivatePartyHandler = require('./PrivatePartyHandler.js');
server.use(express.json());

server.get('/', function (req, res) {
    (async () => {
        
    })()
})

server.post('/', function (req, res) {
    (async () => {
        const action = req.body.Data[0]
        const userId = req.body.Data[1]

        if (!PrivatePartyHandler[action]) return;
        const status = await PrivatePartyHandler[action](userId)
        res.send(status)
    })()
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})