const Config = require('./Config.js');

const Say = (message) => {
    message.channel.send(message.content.slice(4))
    message.delete().catch(O_o=>{}); 
}

function doIt(message, value){
    message.channel.overwritePermissions(message.channel.guild.defaultRole, { VIEW_CHANNEL: value });
    message.channel.send('sala ocultada de everyone, por favor nao mude suas permisoes');
}
const channelView = (message, view) => {
    for (pessoa of message.channel.permissionOverwrites){
        pessoa = pessoa[1];
        if(message.author.id === pessoa.id && pessoa.allow === 805829713){
            if(view === false){
                doIt(message, false);
                return 0;
            }else{
                doIt(message, true);
                return 0;
            }
        }else{
            message.channel.send('n~ao adm ou permissoes adulteradas');
        }
    }
}

module.exports.Say = Say;
module.exports.channelView = channelView;
