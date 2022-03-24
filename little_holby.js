const fs = require('fs');
const config = require('./config.json');
const { Client, Intents, MessageEmbed, Collection } = require("discord.js");
const client = new Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS ] }, { fetchAllMembers: true });


// Initialize bot
client.login(config.bot_token);

client.on('ready', () => {
    client.user.setStatus('Online');
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(config.bot_activity);
    client.commands = new Collection();
    readEvents();
    readCommands();
});

// Searches through the commands directory for commands and adds them to the bot
function readCommands(){
    fs.readdirSync("./commands/").forEach(dirs => {
        let commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`./commands/${dirs}/${file}`);
            client.commands.set(pull.name, pull);
        };
    });
}

// Searches through the events directory for events and adds them to the bot
function readEvents(){
    fs.readdirSync("./events/").forEach(file => {
        let pull = require(`./events/${file}`);
        client.commands.set(pull.name, pull);
        client.on(file.split('.')[0], pull.bind(null, client));
    });
}

client.on('message', async (message) => {
    // Parse for the bot
    let msg = message.content.toLowerCase(); 
    const args = message.content.slice(config.bot_prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(!message.author.bot){
        if (cmd.length === 0) return;
        let command = client.commands.get(cmd);
        if (command) command.run(client, message, args);
    }
});