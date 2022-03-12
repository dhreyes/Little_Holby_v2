module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kick anyone with one shot whithout knowing anyone",
    usage: "kick <@user> <reason>",
    run: async (client, message, args) => {
      let target = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
  
      if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have enough powers to kick someone");
  
      if (!args[0]) return message.reply(`Please mention someone to kick`);
      if (!target) return message.reply(`I can't find that member`);
  
      if (message.author.id !== message.guild.ownerId && target.roles.highest.position >= message.member.roles.highest.position) {
        return message.reply(`They have more power than you`);
      }
  
      if (target.id === message.author.id) return message.reply(`I can't kick you as you are the Boss`);
      
      if (target.bannable) {
        target.kick();
        message.channel.send(`Kicked \`${target}\` for \`${reason || "No Reason Provided"}\``);
        message.delete();
      } else {
        return message.reply(`I can't kick them, make sure that my role is above of theirs`);
      }
    }
  };