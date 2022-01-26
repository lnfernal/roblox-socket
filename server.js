const express = require('express');
const server = express();
const PrivatePartyHandler = require('./PrivatePartyHandler.js');

server.get('/', function (req, res) {
    (async () => {
        const PrivatePartyData = {success: true, id: (await PrivatePartyHandler.CreatePrivatePartyIdentifier()).toString()}
        res.send(await PrivatePartyHandler.CreateNewPrivateParty(10))
    })()
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})