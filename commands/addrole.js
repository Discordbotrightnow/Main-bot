module.exports.run = async (bot, message, args) => {
    let Member = message.guild.roles.cache.get('732029631317934140');
    const member = message.mentions.members.first();

    member.roles.add(Member);
    message.channel.send('Role Added')
}

module.exports.config = {
    name: "addrole",
    description: "",
    usage: "-addrole",
    accessableby: "Members",
    aliases: []
}