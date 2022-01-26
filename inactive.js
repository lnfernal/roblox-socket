const { Client, Collection, WebhookClient } = require('discord.js')
const fs = require('fs')

const client = new Client()

client.commands = new Collection()
for (const file of fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'))) {
    const command = require(`./Commands/${file}`)
    client.commands.set(command.name, command)
}

function isCommand(message) {
    return message.content.startsWith('-')
}

function findCommandAlias(alias) {
    for (const command of client.commands) {
        if (command[1].aliases.find(commandAlias => commandAlias === alias)) return command[1]
    }
    return false
}

client.on('message', async message => {
    try {
        if (message.author.bot) return
        if (!isCommand(message)) return;

        const args = message.content.slice(('-').length).split(' ')
        const command = args.shift().toLowerCase()
        if (!client.commands.get(command) && !findCommandAlias(command)) return;

        if (client.commands.get(command)) {
            client.commands.get(command)
            .execute(message, args)
        }

        if (!client.commands.get(command) && findCommandAlias(command)) {
            findCommandAlias(command)
            .execute(message, args)
        }

    } catch(err) {
        
    }
})

client.login(process.env.TOKEN);