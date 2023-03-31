const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "ping",
        this.description = "Permets de voir le ping du bot."
    }

    async execute(bot, interaction) {
        const PING = new EmbedBuilder()
            .setColor(bot.config.clients.embedColor)
            .setTitle('**Ping**')
            .setDescription("🏓 Pong")
            .addFields(
                { name: '🔧 - Latence :', value: `${Date.now() - interaction.createdTimestamp}ms.` },
            )
            .setTimestamp()
            .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo});

        interaction.reply({ embeds: [PING] });
    }
}

module.exports = command