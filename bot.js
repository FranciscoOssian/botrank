const Discord = require('discord.js')
const Config = require('./Config.js')
const Comands = require('./priv/Main.js')

const client = new Discord.Client()

client.on('ready', () =>{
    console.log('I am ready!')
});

client.on('message', message =>{

    if(message.channel.id === process.env.id_channel_memes || message.channel.id === process.env.id_channel_sugestoes) {
        message.react("👍");
        message.react("👎");
    }

    if(message.author.bot) return                                       // is a bot?
    if(message.content.indexOf(Config.GetConfig().prefix) != 0) return // have prefix?
    
    var comandName = message.content.split(" ")[0].slice(1)
    //var comand = message.content.split(" ") "+say hi"      ->  ['+say','hi']
    //comand = comand[0]                      ['+say','hi']  ->  '+say' 
    //comand = comand.slice(1)                '+say'         ->  'say'
    
    if(comandName === 'say'){
        Comands.Say(message)
    }
    if(comandName === 'channel.hidden'){
        var haveMember = Comands.channelView(message, false);
        if(haveMember) message.channel.send('sala ocultada de everyone');
        else message.channel.send('sem adm ou permissões modificadas');
    }
    if(comandName === 'channel.open'){
        var haveMember = Comands.channelView(message, true);
        if(haveMember) message.channel.send('sala exposta a everyone');
        else message.channel.send('sem adm ou permissões modificadas');
    }
    if(comandName === 'ban'){
        if(!message.member.roles.has(process.env.role_gerente))
            return message.reply("Sorry, sem autorização bro");

        var args = message.content.slice(Config.GetConfig().prefix.length).trim().split(/ +/g);
        Comands.banMember(message, args);
        //console.log(Comands);
    }

});


client.login(process.env.bot_token);


