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
        if (PrivateParty.Owner === UserId) {
            return PrivateParty
        }
    }
    return
}

async function CreateNewPrivateParty(userid) {
    if (await GetPrivatePartyFromUserIdAsync(userid)) {
        console.log(`User ${userid} already owns a private party!`)
        return await GetPrivatePartyFromUserIdAsync(userid)
    }

    const PartyID = await CreatePrivatePartyIdentifier()
    await PrivatePartyData.set((PartyID).toString(), {
        PartyID: PartyID,
        Owner: userid,
        Players: [userid]
    })

    return {success: true, id: PartyID}
}

async function ClosePrivateParty(userid) {
    if (await GetPrivatePartyFromUserIdAsync(userid)) {
        PrivatePartyData.delete(partyId)
        console.log('Deleted successfully.')
        return {success: true}
    }
    return {success: false, statusReason: 'no_private_party_found'}
}

module.exports = {
    CreateNewPrivateParty: CreateNewPrivateParty,
    ClosePrivateParty: ClosePrivateParty,
    GetPrivatePartyFromUserIdAsync: GetPrivatePartyFromUserIdAsync
}