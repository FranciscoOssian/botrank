const Say = (message) => {
    message.channel.send(message.content.slice(4))
    message.delete().catch(O_o=>{}); 
}


const channelView = (message, view) => {
    doIt = (message, value) => {
        if(value === true) message.channel.overwritePermissions(message.channel.guild.defaultRole, { VIEW_CHANNEL: true });
        else message.channel.overwritePermissions(message.channel.guild.defaultRole, { VIEW_CHANNEL: false });
        return 0;
    }
    
    for (pessoa of message.channel.permissionOverwrites){
        pessoa = pessoa[1];
        if(message.author.id === pessoa.id && pessoa.allow === 805829713){
            if(view === false){
                doIt(message, false);
            }else{
                doIt(message, true);
            }
            return 0;
        }else{
            message.channel.send('n~ao adm ou permissoes adulteradas');
        }
    }
}

module.exports.Say = Say;
module.exports.channelView = channelView;