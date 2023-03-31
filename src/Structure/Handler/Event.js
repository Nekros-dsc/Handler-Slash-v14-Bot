const fs = require('fs');

module.exports = async (bot) => {
    const eventFiles = fs.readdirSync('./src/Events/').filter(f => f.endsWith('.js'))
    for (const file of eventFiles) {
        const event = require(`../../../src/Events/${file}`)
        
        console.log('\x1b[32m' + 'L\'event ' + '\x1b[35m' + `${file.split('.')[0]}` + '\x1b[32m' + ' est chargée avec succés !')
        bot.on(event.name, (...args) => event.execute(...args, bot))
    }
    
    const eventSubFolders = fs.readdirSync('./src/Events/').filter(f => !f.endsWith('.js'))
    eventSubFolders.forEach(folder => {
      const commandFiles = fs.readdirSync(`./src/Events/${folder}/`).filter(f => f.endsWith('.js'))
      for (const file of commandFiles) {
        const event = require(`../../../src/Events/${folder}/${file}`)

        console.log('\x1b[32m' + `L'event ` + '\x1b[35m' + `${file.split('.')[0]}`  + '\x1b[32m' + ' est chargée avec succés depuis ' + '\x1b[35m' + `${folder}`)
        bot.on(event.name, (...args) => event.execute(...args, bot))
      }
    });
}