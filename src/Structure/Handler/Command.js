const fs = require('fs');

module.exports = async (bot) => {
    const commandSubFolders = fs.readdirSync('./src/Commands/').filter(f => !f.endsWith('.js'))
    commandSubFolders.forEach(folder => {
        const commandFiles = fs.readdirSync(`./src/Commands/${folder}/`).filter(f => f.endsWith('.js'))

        for (const file of commandFiles) {
            const command = require(`../../../src/Commands/${folder}/${file}`)
            console.log('\x1b[31m' + `La commande ` + '\x1b[35m' + `${file.split('.')[0]}` + '\x1b[31m' + ' est chargé depuis ' + '\x1b[35m' + `${folder}`)
            const data = new command()
            bot.commands.set(data.name, data)
        }
    });
}