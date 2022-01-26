const fetch = require('node-fetch')
const jsoning = require('jsoning')
const PrivatePartyData = new jsoning('./Data/PrivatePartyData.json')

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
    for (const PrivateParty of Object.values(await PrivatePartyData.all())) {
        if (PrivateParty.Owner == UserId) return PrivateParty
    }
    return
}

async function CreateNewPrivateParty(userid) {
    try {
        const PartyID = await CreatePrivatePartyIdentifier()
        console.log(userid, PartyID)
        console.log(await PrivatePartyData.all())
        await PrivatePartyData.push('a', 'b')

        /*{
            PartyID: Number(PartyID),
            Owner: userid,
            Players: []
        }*/

        return {success: true, id: PartyID}
    } catch(err) {
        return {success: false, error: err}
    }
}

module.exports = {
    GetDataFromUserIdAsync: GetDataFromUserIdAsync,
    GetDataFromNameAsync: GetDataFromNameAsync,
    GetPrivatePartyFromUserIdAsync: GetPrivatePartyFromUserIdAsync,
    CreatePrivatePartyIdentifier: CreatePrivatePartyIdentifier,
    CreateNewPrivateParty: CreateNewPrivateParty
}