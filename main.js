const fetch = require('node-fetch')
const jsoning = require('jsoning')
const privatePartyData = new jsoning('/Data/PrivatePartyData.json')

async function CreatePrivatePartyIdentifier() {
    return Math.floor(Math.random() * (999999 - 100000) + 100000)
}

async function GetDataFromUserIdAsync(userid) {
    return fetch(`https://api.roblox.com/users/${userid}`)
}

async function GetDataFromNameAsync(username) {
    return fetch(`https://api.roblox.com/users/get-by-username?username=${username}`)
}

async function GetPrivatePartyFromUserIdAsync(UserId) {
    for (const PrivateParty of Object.values(await privatePartyData.all())) {
        if (PrivateParty.Owner == UserId) return PrivateParty
    }
    return
}

module.exports = {
    GetDataFromUserIdAsync: GetDataFromUserIdAsync,
    GetDataFromNameAsync: GetDataFromNameAsync,
    GetPrivatePartyFromUserIdAsync: GetPrivatePartyFromUserIdAsync
}