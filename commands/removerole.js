module.exports.run = async (bot, message, args) => {
    let Member = message.guild.roles.cache.get('732029631317934140');
    const member = message.mentions.members.first();

    member.roles.remove(Member);
    message.channel.send('Role Removed')
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "-removerole",
    accessableby: "Members",
    aliases: []
}