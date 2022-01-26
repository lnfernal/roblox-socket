const express = require('express');
const server = express();
const PrivatePartyHandler = require('./PrivatePartyHandler.js');

server.get('/', function (req, res) {
    (async () => {
        res.send((await PrivatePartyHandler.CreatePrivatePartyIdentifier()).toString())
    })()
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})