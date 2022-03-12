const Discord = require('discord.js');

module.exports = {
    name: "help",
    category: "moderation",
    description: "List all the moderation commands and how to use them",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Moderation Commands")
            .setDescription("List of all the moderation commands")
            .addField("Kick", "Usage: `kick [user] [reason]`")
            .addField("Ban", "Usage: `ban [user] [reason]`")
            .addField("Unban", "Usage: `unban [user]`")
            .addField("Mute", "Usage: `mute [user] [reason]`")
            .addField("Unmute", "Usage: `unmute [user]`")
            .addField("Purge", "Usage: `purge [number]`")
            .setColor("#ff0000")
            .setTimestamp();
        message.channel.send({ embeds: [embed]});
    }
}
