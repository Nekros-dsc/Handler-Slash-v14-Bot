const { Events } = require("discord.js")

module.exports = {
    name: Events.ClientReady,
    execute(bot) {
        bot.application.commands.set(bot.commands.map(({ execute, ...data }) => data))
    }
}