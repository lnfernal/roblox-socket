const { MessageEmbed } = require('discord.js')

module.exports = {
    new: function(channel, author, title, color, fields, footer, thumbnail) {
        const embed = new MessageEmbed()
        if (author) {
            embed.setAuthor(author)
        }
        if (title) {
            embed.setTitle(title)
        }
        if (thumbnail) {
            embed.setThumbnail(thumbnail)
        }
        embed.setColor(color || '#000000')
        embed.addFields(
            ...fields
        )
        embed.setFooter(`Took ${Number(footer) * 1000}ms`)

        return channel.send(embed)
    }
}