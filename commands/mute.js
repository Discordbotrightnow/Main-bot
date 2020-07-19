module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let Muted = message.guild.roles.cache.get('732029840563372132');
        let Member = message.guild.roles.cache.get('732029631317934140');
        if(Muted) {
            member.roles.add(Muted);
            member.roles.remove(Member);
            message.channel.send("User was Successfully muted.");
        }
}

module.exports.config = {
    name: "mute",
    description: "",
    usage: "-mute",
    accessableby: "Members",
    aliases: []
}