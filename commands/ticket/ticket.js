const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "ticket",
    aliases: ["ticket"],
    category: "moderation",
    description: "Create ticket message",
    run: async (bot, message, args, con) => {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send('You need to have the **manage messages** permission to use this command ❌');

        const setupEmbed = new MessageEmbed();
        setupEmbed.setColor('GREEN');
        setupEmbed.setAuthor('Tickets system\nTo create a ticket click on the reaction below 🤝');
        setupEmbed.setDescription('*A new channel will be created for you to talk with the team members !*');
        
        // Setup button for users to click on and open a ticket
        const ticketButton = new MessageButton();
        ticketButton.setEmoji('🔓');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('Open a ticket');
        ticketButton.setCustomId('createTicket');
        
        const row = new MessageActionRow().addComponents(ticketButton);        
        message.channel.send({ embeds: [setupEmbed], components: [row] });
    }
};