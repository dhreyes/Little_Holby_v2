const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "purge",
  category: "moderation",
  aliases: ['purge', 'delete', 'prune'],

  async run(bot, message, args) {
    try {
      let prefix = `!`;
      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You don't have **MANAGE_MESSAGES** premssions to use this command.");
      if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("I don't have **MANAGE_MESSAGES** permissions to use this command.");
      
      let amount = Number(args[0], 10) || parseInt(args[0]);
      if (isNaN(amount) || !Number.isInteger(amount)) return message.channel.send("Please enter a number of messages to purge.");
      if (!amount || amount < 2 || amount > 100) return message.channel.send("Please enter a number of message between 2 and 100.")
      
      try {
        await message.delete()
        await message.channel.bulkDelete(amount).then(async (m) => {
          let embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`);

          message.channel.send({ embeds: [embed] }).then(msg => msg.delete({ timeout: 10000 }));
        });
      } catch (e) {
        console.log(e)
        message.channel.send(`You can only delete the messages which are not older than 14 days.`)
      }
    } catch (error) {
      console.log(error)
      message.channel.send(`An error occurred: \`${error}\``)
    }
  }
}