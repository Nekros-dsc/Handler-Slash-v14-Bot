const { Events } = require("discord.js")

module.exports = {
    name: Events.InteractionCreate,
    execute(interaction, bot) {
        if(interaction.channel === null) return
        if(!interaction.isCommand()) return
        if(!bot.commands.has(interaction.commandName)) return
        try {
            bot.commands.get(interaction.commandName).execute(bot, interaction)
        } catch (error) {
            console.error(error)
        }
    }
}