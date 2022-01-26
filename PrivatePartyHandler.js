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
    console.log(await PrivatePartyData.all())
    for (const PrivateParty of Object.values(await PrivatePartyData.all())) {
        if (PrivateParty.Owner === UserId) return PrivateParty
    }
    return
}

async function CreateNewPrivateParty(userid) {
    try {
        const PartyID = await CreatePrivatePartyIdentifier()
        await PrivatePartyData.set((PartyID).toString(), {
            PartyID: PartyID,
            Owner: userid,
            Players: [userid]
        })
        console.log(await PrivatePartyData.all())
        return {success: true, id: PartyID}
    } catch(err) {
        return {success: false, error: err}
    }
}

async function ClosePrivateParty(partyId) {
    if (PrivatePartyData.get(partyId)) {
        PrivatePartyData.delete(partyId)
        console.log(await PrivatePartyData.all())
    }
}

async function GetAllPrivateParties() {

}

module.exports = {
    GetDataFromUserIdAsync: GetDataFromUserIdAsync,
    GetDataFromNameAsync: GetDataFromNameAsync,
    GetPrivatePartyFromUserIdAsync: GetPrivatePartyFromUserIdAsync,
    CreatePrivatePartyIdentifier: CreatePrivatePartyIdentifier,
    CreateNewPrivateParty: CreateNewPrivateParty,
    ClosePrivateParty: ClosePrivateParty
}