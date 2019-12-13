const Say = (message) => {
    message.channel.send(message.content.slice(4))
    message.delete().catch(O_o=>{}); 
}


const channelView = (message, view) => {
    for (pessoa of message.channel.permissionOverwrites){
        pessoa = pessoa[1];
        if(message.author.id === pessoa.id && pessoa.allow === 805829713){
            if(view === false){
                message.channel.overwritePermissions(message.channel.guild.defaultRole, { READ_MESSAGES: false });
                return true;
            }else{
                message.channel.overwritePermissions(message.channel.guild.defaultRole, { READ_MESSAGES: true });
                return true;
            }
        }
    }
    return false;
}

module.exports.Say = Say;
module.exports.channelView = channelView;
