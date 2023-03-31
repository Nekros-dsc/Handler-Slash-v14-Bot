const { Client, GatewayIntentBits, Collection } = require('discord.js');

const bot = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
    ]
});

bot.config = require('./config');
bot.commands = new Collection()

require('./src/Structure//Handler/Event')(bot);
require('./src/Structure//Handler/Command')(bot);

bot.login(bot.config.clients.token);