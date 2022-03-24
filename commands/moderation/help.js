const Discord = require('discord.js');

module.exports = {
    name: "help",
    category: "moderation",
    description: "List all the moderation commands and how to use them",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        // Show that help command
            .setTitle("Moderation Commands")
            .setDescription("List of all the moderation commands")
            .addField("ticket", "Usage: `!ticket` \nCreate a ticket for private support")
            .addField("addrole", "Usage: `!addrole @user <role>`\nAdds a role to a user")
            .addField("removerole", "Usage: `!removerole @user <role>`\nRemoves a role from a user")
            .addField("mute", "Usage: `!mute @user <reason>`\nMutes a user")
            .addField("unmute", "Usage: `!unmute @user`\nUnmutes a user")
            .addField("kick", "Usage: `!kick @user <reason>`\nKicks a user")
            .addField("ban", "Usage: `!ban @user <reason>`\nBans a user")
            .addField("purge", "Usage: `!purge <number>`\nDeletes a number of messages")
            .setColor("#ff0000")
            .setTimestamp();
        message.channel.send({ embeds: [embed]});
    }
}
