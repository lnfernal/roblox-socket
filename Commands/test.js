const fetch = require('node-fetch')

async function GetDataFromUserIdAsync(userid) {
    return fetch(`https://api.roblox.com/users/${userid}`)
}

async function GetDataFromNameAsync(username) {
    return fetch(`https://api.roblox.com/users/get-by-username?username=${username}`)
}

module.exports = {
    name: 'test',
    aliases: ['t'],

    execute(message, args) {
        if (!args[0]) return;

        (async () => {
            const userdata = await (await (Number(args[0]).toString() === 'NaN' && GetDataFromNameAsync(args[0]) || GetDataFromUserIdAsync(args[0]))).json()
            console.log(userdata)
        })()
    }
}