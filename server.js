const express = require('express');
const server = express();

const PrivatePartyHandler = require('./PrivatePartyHandler.js');
server.use(express.json());

server.get('/', function (req, res) {
    (async () => {
        res.send('Not found')
    })()
})

server.post('/partyinfo', function (req, res) {
    (async () => {
        const action = req.body.Data[0]
        const userId = req.body.Data[1]

        if (!PrivatePartyHandler[action]) return;
        res.send(await PrivatePartyHandler.CreateNewPrivateParty(userId))
    })()
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})