const express = require('express');
const server = express();
const PrivatePartyHandler = require('./PrivatePartyHandler.js');

(async () => {
    console.log(await PrivatePartyHandler.CreatePrivatePartyIdentifier())
})()

server.get('/', function (req, res) {
    console.log(req)
    res.send(req)
})

server.listen(process.env.PORT || 8000, function() {
    console.log(`Server running on port ${process.env.PORT || 8000}`)
})