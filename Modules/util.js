module.exports = {
    checkPermissions: function(user) {
        return (user.roles.cache.some(role => role.id === '850091758087700511'))
    },
    getMainGuild: function() {
        return 849772165749800960
    },
    messageInGuild: function(message) {
        return message.guild !== null
    },
    giveRole: function(member, role) {
        member.roles.add(role)
    },
    removeRole: function(member, role) {
        member.roles.remove(role)
    },
    msToDate: function(ms) {
        return new Date(ms).toString().slice(4, -26)
    }
}