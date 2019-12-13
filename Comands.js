const Say = (message) => {
    message.channel.send(message.content.slice(4))
    message.delete().catch(O_o=>{}); 
}


const channelView = (message, view) => {
    doIt = (message, value) => {
        message.channel.send('entrou no doit');
        if(value === true){
            message.channel.send('entrou no if do doit');
            message.channel.overwritePermissions(message.channel.guild.defaultRole, { READ_MESSAGES: true });
        }
        else{
            message.channel.send('entrou no else do doit');
            message.channel.overwritePermissions(message.channel.guild.defaultRole, { READ_MESSAGES: false });
        }
        return 0;
    }
    
    for (pessoa of message.channel.permissionOverwrites){
        message.channel.send('entrou no for');
        pessoa = pessoa[1];
        if(message.author.id === pessoa.id && pessoa.allow === 805829713){
            message.channel.send('entrou no if do for');
            if(view === false){
                message.channel.send('entrou no if do if do for');
                doIt(message, false);
            }else{
                message.channel.send('entrou no else do if do if do for');
                doIt(message, true);
            }
            return 0;
        }else{
            message.channel.send('ahhhhh');
            message.channel.send('n~ao adm ou permissoes adulteradas');
        }
    }
}

module.exports.Say = Say;
module.exports.channelView = channelView;
