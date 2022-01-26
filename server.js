const express = require('express');
const server = express();
const PrivatePartyHandler = require('./PrivatePartyHandler.js');

server.get('/', function (req, res) {
    (async () => {
        res.send({})
    })()
})

server.post('/', function (req, res) {
    console.log(req.body)
    (async () => {
        res.send({})
    })()
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})

/*
const PrivatePartyData = {success: true, id: (await PrivatePartyHandler.CreatePrivatePartyIdentifier()).toString()}
res.send(await PrivatePartyHandler.CreateNewPrivateParty(10))
*/